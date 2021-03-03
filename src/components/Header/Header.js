import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from '../../images/logo.svg';
import profileIcon from '../../images/icon-main.svg'
import Menu from '../Menu/Menu';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Switch>
            <Route exact path='/'>
                <header className="header">
                    <Link to="/">
                        <img className="header__logo" src={logo} alt="логотип" />
                    </Link>
                    <div className="header__landing-container">
                        <Link to="/signup" className="header__text">Регистрация</Link>
                        <Link to="/signin" className="header__link"><div className="header__button">Войти</div></Link>
                    </div>
                </header>
            </Route>
            <Route exact path='/movies'>
                <header className="header">
                    <div className="header__landing-container">
                        <Link to="/">
                            <img className="header__logo" src={logo} alt="логотип" />
                        </Link>
                        <Link to="/movies" className="header__text header__text_type_films">Фильмы</Link>
                    </div>
                    <div className="header__landing-container header__landing-container_type_profile">
                        <Link to="/profile" className="header__text header__text_type_profile">Аккаунт</Link>
                        <Link to="/profile" className="header__link-profile">
                            <img className="header__icon-man" src={profileIcon} alt="Иконка человека" />
                        </Link>
                    </div>
                    < Menu />
                </header>
            </Route>
            <Route exact path='/saved-movies'>
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
                        <p className="header__text header__text_type_profile">Аккаунт</p>
                        <Link className="header__link-profile">
                            <img className="header__icon-man" src={profileIcon} alt="Иконка человека" />
                        </Link>
                    </div>
                    < Menu />
                </header>
            </Route>
            <Route exact path='/profile'>
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
                        <p className="header__text header__text_type_profile">Аккаунт</p>
                        <Link className="header__link-profile">
                            <img className="header__icon-man" src={profileIcon} alt="Иконка человека" />
                        </Link>
                    </div>
                    < Menu />
                </header>
            </Route>
        </Switch>
    );
}
export default Header;