import React from 'react';
import Header from './Header';
import { Link } from "react-router-dom";

class Register extends React.Component {
  render() {
    return (
      <div className="register">
        <p className="register__welcome">
          СТРАНИЦА РЕГИСТРАЦИИ В РАЗРАБОТКЕ
        </p>
        <form className="register__form">
          <label htmlFor="username">
            Username:
          </label>
          {/* <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} /> */}
          <label htmlFor="email">
            Email:
          </label>
          {/* <input id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} /> */}
          <label htmlFor="password">
            Password:
          </label>
          {/* <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} /> */}
          <label htmlFor="confirmPassword">
            Confirm password:
          </label>
          {/* <input id="confirmPassword" name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.handleChange} /> */}
          <div className="register__button-container">
            <button type="submit" className="register__link">Sign up</button>
          </div>
        </form>
        <div className="register__signin">
          <p>Already a member?</p>
          <Link to="sign-in" className="register__login-link">Log in here</Link>
        </div>
      </div>
    );
  }
}

export default Register;
