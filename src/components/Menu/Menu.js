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
                        <p className="header__text">Главная</p>
                        <p className="header__text">Фильмы</p>
                        <p className="header__text">Сохранённые фильмы</p>
                    </div>
                    <div className="header__landing-container">
                        <p className="header__text header__text_type_profile">Аккаунт</p>
                        <Link className="header__link-profile">
                            <img className="header__icon-man" src={profileIcon} alt="Иконка человека" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;