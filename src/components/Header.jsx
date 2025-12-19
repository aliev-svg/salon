import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1 className="logo">AvtoHome</h1>

        <nav className="nav">
          <Link to="/login">Вход</Link>
<Link to="/register">Регистрация</Link>

          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/about" className="nav-link">О нас</Link>
          <Link to="/contacts" className="nav-link">Контакты</Link>
          <Link to="/basket" className="nav-link basket-link">

            🛒 Корзина
          </Link>
        </nav>
      </div>
    </header>
  );
}
