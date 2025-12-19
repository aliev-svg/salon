import { Link } from "react-router-dom";
import { useBasket } from "../context/BasketContext";

export default function BasketList() {
  const { basket, removeFromBasket } = useBasket();

  if (basket.length === 0) {
    return (
      <div className="page">
        <h2>Корзина пуста</h2>
        <Link to="/">← Вернуться к авто</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>Корзина</h2>

      {basket.map((car) => (
        <div key={car.id} className="basket-item">
          <img src={car.img} width="120" />
          <div>
            <h3>{car.brand} {car.model}</h3>
            <p>{car.price}</p>

            <button onClick={() => removeFromBasket(car.id)}>
              Удалить
            </button>
          </div>
        </div>
      ))}

      <Link to="/">← Назад</Link>
    </div>
  );
}
