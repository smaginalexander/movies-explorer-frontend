import './Menu.css';
import profileIcon from '../../images/icon-main.svg';
import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    const [menu, setMenu] = React.useState(false);

    function openMenu() {
        setMenu(true);
    }

    function closeMenu() {
        setMenu(false);
    }

    return (
        <>
            <span className="header_burger" onClick={openMenu}></span>
            <div className={`header__overlay ${!menu ? 'header__overlay_hidden' : ''}`}>
                <div className="header__menu">
                    <div className="header__close-menu" onClick={closeMenu}>
                        <div className="header__line"></div>
                    </div>
                    <div>
                        <Link to="/" onClick={closeMenu}><p className="header__text">Главная</p></Link>
                        <Link to="/movies" onClick={closeMenu}><p className="header__text">Фильмы</p></Link>
                        <Link to="/saved-movies" onClick={closeMenu}><p className="header__text">Сохранённые фильмы</p></Link>
                    </div>
                    <div className="header__landing-container">
                        <Link to="/profile" onClick={closeMenu}><p className="header__text header__text_type_profile">Аккаунт</p></Link>
                        <Link to="/profile" onClick={closeMenu} className="header__link-profile">
                            <img className="header__icon-man" src={profileIcon} alt="Иконка человека" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;