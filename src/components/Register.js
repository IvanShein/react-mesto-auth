import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect, Redirect, useHistory } from 'react';

function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(email, password);
  };

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  return (
    <div className="login">
      <h2 className="login__subtitle">Регистрация</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <input className="login__input" required name="email" type="email" value={email} placeholder="Email" onChange={handleEmailChange} />
        <input className="login__input" required name="password" type="password" value={password} placeholder="Пароль" onChange={handlePasswordChange} />
        <div className="login__button-container">
          <button className="login__button-submit" type="submit">Зарегистрироваться</button>
          <Link className='login__signin-link' to='/sign-in'>Уже зарегистрированы? Войти</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
