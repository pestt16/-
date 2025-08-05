// client/pages/guest.js
import { useState } from "react";

export default function GuestForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    description: "",
    photo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Заявка гостя отправлена:", formData);
    alert("Заявка отправлена! Молодожёны рассмотрят её.");
    // Тут будет POST-запрос на сервер
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Регистрация гостя</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="name" placeholder="Ваше имя" onChange={handleChange} required />
        <input name="age" type="number" placeholder="Возраст" onChange={handleChange} required />
        <textarea name="description" placeholder="Расскажите о себе" onChange={handleChange} required />
        <input name="photo" type="url" placeholder="Ссылка на фото" onChange={handleChange} />
        <button type="submit">Отправить заявку</button>
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
