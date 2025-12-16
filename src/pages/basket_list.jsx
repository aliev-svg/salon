import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { basketApi } from "../services/basketApi";

export default function BasketList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    basketApi.getAll().then((data) => setOrders(data));
  }, []);

  function handleDelete(id) {
    basketApi.remove(id);
    setOrders(basketApi.getAll());
  }

  return (
    <div className="page">
      <h1>Корзина заказов</h1>

      <Link to="/create-order" className="btn">
        ➕ Создать заказ
      </Link>

      {orders.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul className="basket-list">
          {orders.map(order => (
            <li key={order.id} className="basket-item">
              <strong>{order.title}</strong> — ${order.price}

              <div className="basket-actions">
                <Link to={`/basket/${order.id}`}>Открыть</Link>
                <Link to={`/update-order/${order.id}`}>✏️</Link>
                <button onClick={() => handleDelete(order.id)}>🗑</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
