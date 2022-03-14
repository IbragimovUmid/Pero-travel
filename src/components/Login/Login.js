import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login-bg">
      <form action="">
        <div className="form-content">
          <h1 className="log-text">Остались вопросы?</h1>
          <h1 className="log-title">Оставь заявку и мы ответим</h1>
          <input
            placeholder="Имя"
            // onChange={(e) => setUsername(e.target.value)}
            className="input"
            type="text"
          />
          <input
            placeholder="Телефон"
            // onChange={(e) => setEmail(e.target.value)}
            className="input"
            type="text"
          />
          <input
            placeholder="Почта"
            // onChange={(e) => setPassword(e.target.value)}
            className="input"
            type="text"
          />
        </div>
      </form>
      <button className="login-btn">Оставить заявку</button>
    </div>
  );
};

export default Login;
