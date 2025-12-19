import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(form));
    alert("Регистрация успешна!");
    navigate("/login");
  };

  return (
    <div className="page">
      <h2>Регистрация</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Имя" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Пароль" onChange={handleChange} required />
        <input name="phone" placeholder="Телефон" onChange={handleChange} required />
        <input name="city" placeholder="Город" onChange={handleChange} required />

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
