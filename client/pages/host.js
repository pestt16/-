// client/pages/host.js
import { useState } from "react";

export default function HostForm() {
  const [formData, setFormData] = useState({
    coupleNames: "",
    date: "",
    location: "",
    description: "",
    timing: "",
    musicBand: "",
    seats: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Данные свадьбы отправлены:", formData);
    alert("Свадьба зарегистрирована! Скоро будет создана страница.");
    // Тут будет POST-запрос на сервер
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Регистрация свадьбы</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="coupleNames" placeholder="Имена молодожёнов" onChange={handleChange} required />
        <input name="date" type="date" placeholder="Дата свадьбы" onChange={handleChange} required />
        <input name="location" placeholder="Место проведения" onChange={handleChange} required />
        <textarea name="description" placeholder="Описание мероприятия" onChange={handleChange} required />
        <textarea name="timing" placeholder="Тайминг свадьбы" onChange={handleChange} />
        <input name="musicBand" placeholder="Музыкальная группа" onChange={handleChange} />
        <input name="seats" type="number" placeholder="Количество мест" onChange={handleChange} required />
        <input name="price" type="number" placeholder="Стоимость билета (₽)" onChange={handleChange} required />
        <button type="submit">Создать свадьбу</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
};
