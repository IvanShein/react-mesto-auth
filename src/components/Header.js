import React from 'react';
import mestoLogo from '../images/mesto_logo.svg';
import { Route, Switch, Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={mestoLogo} alt="Место Россия - логотип" />
      <Switch>
        <Route path="/sign-in">
          <div className='header__login-info'>
            <Link to="/sign-up" className="header__signin-link">Регистрация</Link>
          </div>
        </Route>
        <Route path="/sign-up">
          <div className='header__login-info'>
            <Link to="/sign-in" className="header__signin-link">Войти</Link>
          </div>
        </Route>
        <Route exact path="/">
          <div className='header__login-info'>
            <p className="header__email">{props.email}</p>
            <Link to='/sign-in' className="header__signout-link" onClick={props.onSignOut}>Выйти</Link>
          </div>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
