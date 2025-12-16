import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { basketApi } from "../services/basketApi";

export default function UpdateOrder() {
  const { id } = useParams();
  const navigate = useNavigate();
  const order = basketApi.getById(id);

  const [form, setForm] = useState(order);

  if (!order) return <p>Заказ не найден</p>;

  function handleSubmit(e) {
    e.preventDefault();
    basketApi.update(id, form);
    navigate("/basket");
  }

  return (
    <div className="page">
      <h1>Редактировать заказ</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          value={form.car}
          onChange={e => setForm({ ...form, car: e.target.value })}
        />

        <textarea
          value={form.comment}
          onChange={e => setForm({ ...form, comment: e.target.value })}
        />

        <button className="btn">Сохранить</button>
      </form>
    </div>
  );
}
