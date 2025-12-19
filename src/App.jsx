import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Home from "./pages/Home";
import CarDetail from "./pages/CarDetail";
import BasketList from "./pages/basket_list";

import About from "./pages/About";
import Contacts from "./pages/Contacts";

import "./styles.css";

export default function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Routes>
          {/* Главная */}
          <Route path="/" element={<Home />} />

          {/* Детали авто */}
          <Route path="/car/:id" element={<CarDetail />} />
    <Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />

          {/* Корзина */}
          <Route path="/basket" element={<BasketList />} />

          {/* Новые страницы */}
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
