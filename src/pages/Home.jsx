import { cars } from "../data/cars";
import CarsGrid from "../components/CarsGrid";

export default function Home() {
  return (
    <div className="page">
      <header className="site-header">
        <h1>AvtoHome</h1>
        <p className="subtitle"></p>
      </header>

      <CarsGrid cars={cars} />
    </div>
  );
}

