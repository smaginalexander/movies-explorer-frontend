import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';

function Register(props) {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [errorName, setErrorName] = React.useState(' ')
    const [errorEmail, setErrorEmail] = React.useState(' ')
    const [errorPassword, setErrorPassword] = React.useState(' ')
    const [formIsValid, setFormIsValid] = React.useState(false)

    const ckeckValidation = () => {
        if (errorName === '' && errorEmail === '' && errorPassword === '') {
            setFormIsValid(true)
        } else {
            setFormIsValid(false)
        }
    }
    React.useEffect(() => {
        ckeckValidation();
    }, [errorName, errorEmail, errorPassword])

    const handleChangeName = (evt) => {
        setName(evt.target.value);
        const re = /^[ a-zA-Z\-\']+$/;
        if (evt.target.value.length < 2) {
            setErrorName('Длинна имени должна быть не менее 2 символов.')
        } else if (!re.test(String(evt.target.value).toLowerCase())) {
            setErrorName('Имя может содержать только латиницу, пробел или дефис.')
        } else {
            setErrorName('')

        }
    }

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
        props.onRegisterSubmit(name, email, password)
    }


    return (
        <section className="register">
            <Link to="/">
                <img className="register__logo" src={logo} alt="Логотип" />
            </Link>
            <p className="register__title">Добро пожаловать!</p>
            <form onSubmit={handleSubmit} className="register__form">
                <span className="register__name-input">Имя</span>
                <input
                    onChange={handleChangeName}
                    className="register__input"
                />
                <span className={`register__error ${errorName === '' ? "register__error_hidden" : ''}`}>{errorName}</span>
                <span className="register__name-input">E-mail</span>
                <input
                    onChange={handleChangeEmail}
                    className="register__input"
                />
                <span className={`register__error ${errorEmail === '' ? "register__error_hidden" : ''}`}>{errorEmail}</span>
                <span className="register__name-input">Пароль</span>
                <input
                    onChange={handleChangePassword}
                    className="register__input"
                />
                <span className={`register__error ${errorPassword === '' ? "register__error_hidden" : ''}`}>{errorPassword}</span>
                <div className="register__button-container">
                    <span className="register__error">{props.errorMessage}</span>
                    <button
                        className={formIsValid ? "register__button" : "register__button_type_disabled"}
                        disabled={!formIsValid}
                    >Зарегистрироваться</button>
                </div>
                <p className="register__text">Уже зарегистрированы?
                    <Link to="/signin" className="Register__link">Войти</Link>
                </p>
            </form>
        </section>
    )
}

export default Register;