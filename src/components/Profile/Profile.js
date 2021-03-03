import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <section className="profile">
            <p className="profile__title">Привет, Виталий!</p>
            <form className="profile__form">
                <div className="profile_container">
                    <span className="profile__name-input">Имя</span>
                    <input className="profile__input" defaultValue="Виталий" />
                </div>
                <div className="profile_container">
                    <span className="profile__name-input">Почта</span>
                    <input className="profile__input" defaultValue="pochta@yandex.ru" />
                </div>
                <button className="profile__buttom">Редактировать</button>
                <Link to="/" className="profile__link">Выйти из аккаунта</Link>
            </form>
        </section>
    )
}

export default Profile;