import CarCard from "./CarCard";

export default function CarsGrid({ cars, onSelect }) {
  return (
    <div className="cars-grid">
      {cars.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}
