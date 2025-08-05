import React, { useState } from "react";

function WeddingForm({ onWeddingCreated }) {
  const [formData, setFormData] = useState({
    names: "",
    date: "",
    location: "",
    description: "",
    seats: "",
    price: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://hzf357lhh9.onrender.com/api/weddings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const newWedding = await response.json();
      onWeddingCreated(newWedding);
      setFormData({ names: "", date: "", location: "", description: "", seats: "", price: "" });
    } else {
      alert("Ошибка при создании свадьбы");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Создать свадьбу</h2>
      <input name="names" placeholder="Имена молодожёнов" value={formData.names} onChange={handleChange} required />
      <input name="date" type="date" value={formData.date} onChange={handleChange} required />
      <input name="location" placeholder="Место проведения" value={formData.location} onChange={handleChange} required />
      <input name="description" placeholder="Описание мероприятия" value={formData.description} onChange={handleChange} />
      <input name="seats" type="number" placeholder="Количество мест" value={formData.seats} onChange={handleChange} required />
      <input name="price" type="number" placeholder="Цена билета (₽)" value={formData.price} onChange={handleChange} required />
      <button type="submit">Создать</button>
    </form>
  );
}

export default WeddingForm;
