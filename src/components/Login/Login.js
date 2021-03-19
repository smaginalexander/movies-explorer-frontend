import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';

function Login(props) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [errorEmail, setErrorEmail] = React.useState(' ')
    const [errorPassword, setErrorPassword] = React.useState(' ')
    const [formIsValid, setFormIsValid] = React.useState(false)

    const ckeckValidation = () => {
        if (errorEmail === '' && errorPassword === '') {
            setFormIsValid(true)
        } else {
            setFormIsValid(false)
        }
    }
    React.useEffect(() => {
        ckeckValidation();
    }, [errorEmail, errorPassword])

    const handleChangeEmail = (evt) => {
        setEmail(evt.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(evt.target.value).toLowerCase())) {
            setErrorEmail('Некорректный email.')
        } else {
            setErrorEmail('')
        }
    }

    const handleChangePassword = (evt) => {
        setPassword(evt.target.value);
        if (evt.target.value.length < 8) {
            setErrorPassword('Необходимо не менее 8 символов.')
        } else {
            setErrorPassword('')

        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onLoginSubmit(email, password);
    }

    return (
        <section className="register">
            <Link to="/">
                <img className="register__logo" src={logo} alt="Логотип" />
            </Link>
            <p className="register__title">Рады видеть!</p>
            <form onSubmit={handleSubmit} className="register__form">
                <span className="register__name-input">E-mail</span>
                <input onChange={handleChangeEmail} className="register__input" />
                <span className={`register__error ${errorEmail === '' ? "register__error_hidden" : ''}`}>{errorEmail}</span>
                <span className="register__name-input">Пароль</span>
                <input onChange={handleChangePassword} className="register__input" />
                <span className={`register__error ${errorPassword === '' ? "register__error_hidden" : ''}`}>{errorPassword}</span>
                <div className="register__button-container">
                    <span className="register__error">{props.errorMessage}</span>
                    <button
                        disabled={!formIsValid}
                        className={formIsValid ? "register__button" : "register__button_type_disabled"}>
                        Войти
                        </button>
                </div>
                <p className="register__text">Ещё не зарегистрированы?
                    <Link to="/signup" className="register__link">Регистрация</Link>
                </p>
            </form>
        </section >
    )
}

export default Login;