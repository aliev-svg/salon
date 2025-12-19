import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const savedUser = JSON.parse(localStorage.getItem("user"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!savedUser) {
      alert("Пользователь не найден");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem("auth", "true");
      alert("Вы вошли!");
      navigate("/");
    } else {
      alert("Неверные данные");
    }
  };

  return (
    <div className="page">
      <h2>Вход</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
