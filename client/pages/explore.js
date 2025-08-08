import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Explore() {
  const router = useRouter();
  const { city, date } = router.query;
  const [weddings, setWeddings] = useState([]);

  useEffect(() => {
    fetch("https://hzf357lhh9.onrender.com/api/weddings")
      .then(res => res.json())
      .then(data => {
        let filtered = data;
        if (city) filtered = filtered.filter(w => w.city?.toLowerCase().includes(city.toLowerCase()));
        if (date) filtered = filtered.filter(w => w.date === date);
        setWeddings(filtered);
      });
  }, [city, date]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Свадьбы</h1>
      <p>Поиск: {city || "все города"} {date || ""}</p>
      {weddings.length === 0 ? (
        <p>Свадьбы не найдены</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}>
          {weddings.map((w, i) => (
            <div key={i} style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px"
            }}>
              <h3>{w.names}</h3>
              <p>{w.city}</p>
              <p>{w.date}</p>
              <p>{w.seats} мест</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
