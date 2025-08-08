import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/explore?city=${encodeURIComponent(city)}&date=${encodeURIComponent(date)}`);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: "url('https://images.unsplash.com/photo-1529634806980-5d54b4b15378')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{
        fontSize: "48px",
        fontWeight: "bold",
        marginBottom: "20px",
        textShadow: "2px 2px 8px rgba(0,0,0,0.5)"
      }}>
        Witness
      </h1>
      <p style={{
        fontSize: "20px",
        maxWidth: "500px",
        marginBottom: "40px",
        textShadow: "1px 1px 5px rgba(0,0,0,0.4)"
      }}>
        Объединим гостей и молодожёнов в одном месте.  
        Найдите свадьбу или создайте свою.
      </p>
      <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
        <Link href="/host">
          <button style={buttonStyle}>Мы — молодожёны</button>
        </Link>
        <Link href="/guest">
          <button style={buttonStyle}>Я — свидетель</button>
        </Link>
      </div>

      {/* Поиск свадеб */}
      <div style={{
        background: "rgba(255,255,255,0.9)",
        padding: "20px",
        borderRadius: "10px",
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        maxWidth: "500px",
        width: "100%"
      }}>
        <input
          type="text"
          placeholder="Город"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={inputStyle}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleSearch} style={{
          ...buttonStyle,
          background: "#ff4081",
          color: "white"
        }}>
          Найти
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "15px 25px",
  fontSize: "18px",
  borderRadius: "8px",
  background: "rgba(255,255,255,0.9)",
  color: "#333",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s"
};

const inputStyle = {
  flex: 1,
  padding: "10px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  minWidth: "120px"
};
