import { useNavigate } from "react-router-dom";

export default function CarCard({ car }) {
  const navigate = useNavigate();

  return (
    <div
      className="car-card"
      onClick={() => navigate(`/car/${car.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") navigate(`/car/${car.id}`);
      }}
    >
      <div className="card-image-wrap">
        <img src={car.img} alt={`${car.brand} ${car.model}`} className="card-image" />
      </div>

      <div className="card-body">
        <h3 className="card-title">{car.brand} {car.model}</h3>
        <p className="card-sub">{car.year} • {car.price}</p>
      </div>
    </div>
  );
}
