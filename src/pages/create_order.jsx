import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { basketApi } from "../services/basketApi";

export default function CreateOrder() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    car: "",
    comment: ""
  });

  function handleSubmit(e) {
    e.preventDefault();

    basketApi.create({
      id: Date.now().toString(),
      ...form
    });

    navigate("/basket");
  }

  return (
    <div className="page">
      <h1>Создать заказ</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          placeholder="Ваше имя"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          placeholder="Автомобиль"
          value={form.car}
          onChange={e => setForm({ ...form, car: e.target.value })}
          required
        />

        <textarea
          placeholder="Комментарий"
          value={form.comment}
          onChange={e => setForm({ ...form, comment: e.target.value })}
        />

        <button className="btn">Создать</button>
      </form>
    </div>
  );
}
