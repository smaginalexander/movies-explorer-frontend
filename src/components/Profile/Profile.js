import React, { useContext, useState, useEffect } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [errorName, setErrorName] = React.useState(' ')
    const [errorEmail, setErrorEmail] = React.useState(' ')
    const [formIsValid, setFormIsValid] = React.useState(false)
    const ckeckValidation = () => {
        if (errorName === '' && errorEmail === '') {
            setFormIsValid(true)
        } else {
            setFormIsValid(false)
        }
    }
    React.useEffect(() => {
        ckeckValidation();
    }, [errorName, errorEmail])

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleUpdateUser({ name, email })
    }

    return (
        <section className="profile">
            <p className="profile__title">Привет, {name}</p>
            <form onSubmit={handleSubmit} className="profile__form">
                <div className="profile_container">
                    <span className="profile__name-input">Имя</span>
                    <input onChange={handleChangeName} className="profile__input" defaultValue={currentUser.name} />
                </div>
                <span className={`register__error ${errorName === '' ? "register__error_hidden" : ''}`}>{errorName}</span>
                <div className="profile_container">
                    <span className="profile__name-input">Почта</span>
                    <input onChange={handleChangeEmail} className="profile__input" defaultValue={currentUser.email} />
                </div>
                <span className={`register__error ${errorEmail === '' ? "register__error_hidden" : ''}`}>{errorEmail}</span>
                <div className="register__button-container">
                    <button className={formIsValid ? "profile__button" : "profile__button"}>Редактировать</button>
                    <Link to="/signin" onClick={props.exitFromPriofile} className="profile__link">Выйти из аккаунта</Link>
                </div>

            </form>
        </section>
    )
}

export default Profile;