import { useNavigate } from "react-router-dom";
import { basketApi } from "../services/basketApi";

export default function CarCard({ car }) {
  const navigate = useNavigate();

  function handleAddToBasket(e) {
    e.stopPropagation(); // чтобы не переходило на страницу авто
    basketApi.add(car);
    alert("Автомобиль добавлен в корзину");
  }

  return (
    <div
      className="car-card"
      onClick={() => navigate(`/car/${car.id}`)}
    >
      <img src={car.img} alt={car.brand} className="card-image" />

      <div className="card-body">
        <h3>{car.brand} {car.model}</h3>
        <p>{car.year} • ${car.price}</p>

        <button className="btn" onClick={handleAddToBasket}>
          🛒 Добавить в корзину
        </button>
      </div>
    </div>
  );
}
