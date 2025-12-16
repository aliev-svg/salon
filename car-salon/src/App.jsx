import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from  "./pages/Home";
import CarDetail from "./pages/CarDetail";

import BasketList from "./pages/basket_list";
import BasketDetail from "./pages/basket_detail";
import CreateOrder from "./pages/create_order";
import UpdateOrder from "./pages/update_order";

import "./styles.css";

export default function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<CarDetail />} />

          {/* Корзина */}
          <Route path="/basket" element={<BasketList />} />
          <Route path="/basket/:id" element={<BasketDetail />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/update-order/:id" element={<UpdateOrder />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
