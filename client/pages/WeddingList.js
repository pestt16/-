import React, { useEffect, useState } from "react";

function WeddingList() {
  const [weddings, setWeddings] = useState([]);

  useEffect(() => {
    fetch("https://hzf357lhh9.onrender.com/api/weddings")
      .then((res) => res.json())
      .then((data) => setWeddings(data))
      .catch((err) => console.error("Ошибка загрузки свадеб:", err));
  }, []);

  return (
    <div>
      <h2>Список свадеб</h2>
      {weddings.length === 0 ? (
        <p>Свадеб пока нет.</p>
      ) : (
        <ul>
          {weddings.map((wedding) => (
            <li key={wedding.id}>
              <strong>{wedding.names}</strong> — {wedding.date} в {wedding.location} ({wedding.seats} мест, {wedding.price}₽)
              <br />
              {wedding.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WeddingList;
