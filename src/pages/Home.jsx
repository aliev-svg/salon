import { cars } from "../data/cars";
import CarsGrid from "../components/CarsGrid";

export default function Home() {
  return (
    <div className="page">
      <header className="site-header">

        <p className="subtitle"></p>
      </header>

      <CarsGrid cars={cars} />
    </div>
  );
}

