import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
    AutoSalon
        </Link>
        <nav className="nav">
          <Link to="/">Главная</Link>
          <a href="#cars">Автомобили</a>
          <a href="#contacts">Контакты</a>
          <Link to="/basket" className="nav-link">Корзина</Link>
        </nav>
      </div>
    </header>
  );
}
