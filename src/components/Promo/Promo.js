import React from 'react';
import './Promo.css';
import { Link } from 'react-router-dom';
import earth from '../../images/earth.svg';



function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <div className="promo__text-container">
                    <p className="promo__title">Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.</p>
                    <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                </div>
                <img className="promo__image" src={earth} alt="земной шар" />
            </div>
            <div className="promo__button">
                <Link to="/" className="promo__link">Узнать больше</Link>
            </div>
        </section >
    )
}

export default Promo;