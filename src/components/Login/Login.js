import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';

function Login() {
    return (
        <section className="register">
            <Link to="/">
                <img className="register__logo" src={logo} alt="Логотип" />
            </Link>
            <p className="register__title">Рады видеть!</p>
            <form className="register__form">
                <span className="register__name-input">E-mail</span>
                <input className="register__input" />
                <span className="register__name-input">Пароль</span>
                <input className="register__input" />
                <Link to="/movies">
                    <button className="register__buttom">Войти</button>
                </Link>
                <p className="register__text">Ещё не зарегистрированы?
                    <Link to="/signup" className="Register__link">Регистрация</Link>
                </p>
            </form>
        </section >
    )
}

export default Login;