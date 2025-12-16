import { useParams, Link } from "react-router-dom";
import { basketApi } from "../services/basketApi";

export default function BasketDetail() {
  const { id } = useParams();
  const order = basketApi.getById(id);

  if (!order) return <p>Заказ не найден</p>;

  return (
    <div className="page">
      <h1>Детали заказа</h1>

      <p><b>Имя:</b> {order.name}</p>
      <p><b>Автомобиль:</b> {order.car}</p>
      <p><b>Комментарий:</b> {order.comment}</p>

      <Link to="/basket">← Назад</Link>
    </div>
  );
}
