import React from 'react';
import Header from './Header';
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <p className="login__welcome">
          СТРАНИЦА ВХОДА В СИСТЕМУ НАХОДИТСЯ В СТАДИИ РАЗРАБОТКИ</p>
        <p> Это приложение содержит конфиденциальную информацию.</p>
        <p> Пожалуйста, войдите или зарегистрируйтесь, чтобы получить доступ к CryptoDucks.</p>

        <form className="login__form">
          <label htmlFor="username">
            Логин:
          </label>
          {/* <input id="username" required name="username" type="text" value={this.state.username} onChange={this.handleChange} /> */}
          <label htmlFor="password">
            Пароль:
          </label>
          {/* <input id="password" required name="password" type="password" value={this.state.password} onChange={this.handleChange} /> */}
          <div className="login__button-container">
            <button type="submit" className="login__link">Войти</button>
          </div>
        </form>

        <div className="login__signup">
          <p>Ещё не зарегистрированы?</p>
          <Link to="sign-up" className="signup__link">Зарегистрироваться</Link>
        </div>
      </div>
    );
  }
}

export default Login;
