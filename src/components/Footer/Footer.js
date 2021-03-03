import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__title-container">
                <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            </div>
            <div className="footer__container">
                <span className="footer__text Footer__text_grey">&copy; 2020</span>
                <ul className="footer__links">
                    <li className="footer__link">
                        <a
                            href="https://praktikum.yandex.ru/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__text" >Яндекс.Практикум
                        </a>
                    </li>
                    <li className="footer__link">
                        <a
                            href="https://github.com/smaginalexander?tab=repositories"
                            target="_blank"
                            rel="noreferrer" className="footer__text">Github
                        </a>
                    </li>
                    <li className="footer__link">
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__text">Facebook
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;