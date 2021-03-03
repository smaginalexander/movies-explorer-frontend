import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg'
import { Link } from 'react-router-dom';
function Portfolio() {
    return (
        <section className="portfolio">
            <p className="portfolio__title">Портфолио</p>
            <div className="portfolio__container">
                <a
                    href="https://smaginalexander.github.io/mesto/"
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio__link">
                    <span>Статичный сайт</span>
                    <img className="portfolio__icon" src={arrow} alt="стрелка" />
                </a>
                <a
                    href="https://smaginalexander.github.io/russian-travel/"
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio__link">
                    <span>Адаптивный сайт</span>
                    <img className="portfolio__icon" src={arrow} alt="стрелка" />
                </a>
                <a
                    href="https://smaginalexander.github.io/mesto-react/"
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio__link">
                    <span>Одностраничное приложение</span>
                    <img className="portfolio__icon" src={arrow} alt="стрелка" />
                </a>
            </div>
        </section>
    )
}

export default Portfolio;