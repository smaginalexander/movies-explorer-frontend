import React from 'react';
import { Switch } from 'react-router-dom';
import logo from '../../images/logo.svg';
import profileIcon from '../../images/icon-main.svg'
import Menu from '../Menu/Menu';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <Switch>
            {props.loggedIn ?
                <header className="header">
                    <div className="header__landing-container">
                        <Link to="/">
                            <img className="header__logo" src={logo} alt="логотип" />
                        </Link>
                        <div className="header__text-container">
                            <Link to="/movies" className="header__text header__text_type_films">Фильмы</Link>
                            <Link to="/saved-movies" className="header__text">Сохранённые фильмы</Link>
                        </div>
                    </div>
                    <div className="header__landing-container header__landing-container_type_profile">
                        <Link to="/profile" className="header__text header__text_type_profile">Аккаунт</Link>
                        <Link to="/profile" className="header__link-profile">
                            <img className="header__icon-man" src={profileIcon} alt="Иконка человека" />
                        </Link>
                    </div>
                    < Menu />
                </header>
                :
                <header className="header">
                    <Link to="/">
                        <img className="header__logo" src={logo} alt="логотип" />
                    </Link>
                    <div className="header__landing-container">
                        <Link to="/signup" className="header__text">Регистрация</Link>
                        <Link to="/signin" className="header__link"><div className="header__button">Войти</div></Link>
                    </div>
                </header>
            }
        </Switch>
    );
}
export default Header;