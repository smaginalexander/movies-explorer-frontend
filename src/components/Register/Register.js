import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';

function Register() {
    return (
        <section className="register">
            <Link to="/">
                <img className="register__logo" src={logo} alt="Логотип" />
            </Link>
            <p className="register__title">Добро пожаловать!</p>
            <form className="register__form">
                <span className="register__name-input">Имя</span>
                <input className="register__input" />
                <span className="register__name-input">E-mail</span>
                <input className="register__input" />
                <span className="register__name-input">Пароль</span>
                <input className="register__input" />
                <Link to="/signin">
                    <button className="register__buttom">Зарегистрироваться</button>
                </Link>
                <p className="register__text">Уже зарегистрированы?
                    <Link to="/signin" className="Register__link">Войти</Link>
                </p>
            </form>
        </section>
    )
}

export default Register;