import { useNavigate } from "react-router-dom";
import { useBasket } from "../context/BasketContext";

export default function CarCard({ car }) {
  const navigate = useNavigate();
  const { addToBasket } = useBasket();

  return (
    <div
      className="car-card"
      onClick={() => navigate(`/car/${car.id}`)}
    >
      <img
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        className="card-image"
      />

      <div className="card-body">
        <h3>{car.brand} {car.model}</h3>
        <p>{car.year} • {car.price}</p>

        <button
          className="btn"
          onClick={(e) => {
            e.stopPropagation(); // 🔥 ВАЖНО
            addToBasket(car);
          }}
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}
