import { useParams, useNavigate } from "react-router-dom";
import { cars } from "../data/cars";
import "../styles.css";

export default function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return <h2 style={{ color: "white", textAlign: "center" }}>Автомобиль не найден</h2>;
  }

  return (
    <div className="car-detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Назад
      </button>

      <div className="car-detail-content">
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className="car-detail-image"
        />

        <div className="car-detail-info">
          <h1>{car.brand} {car.model}</h1>
          <p><strong>Год:</strong> {car.year}</p>
          <p><strong>Цена:</strong> {car.price}</p>
          <p className="description">{car.description}</p>
        </div>
      </div>
    </div>
  );
}
