import React from 'react';
import './AboutMe.css';
import portrait from '../../images/portrait.png';

function AboutMe() {
    return (
        <section className="aboutMe">
            <div className="aboutMe__title-container">
                <p className="aboutMe__title">Студент</p>
            </div>
            <div className="aboutMe__container">
                <div className="aboutMe__text-container">
                    <div>
                        <p className="aboutMe__name">Виталий</p>
                        <p className="aboutMe__subtitle">Фронтенд-разработчик, 30 лет</p>
                        <p className="aboutMe__text">Я родился и живу в Саратове, закончил факультет экономики СГУ.
                        У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                    начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    </div>
                    <div className="aboutMe_links">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/"
                            className="aboutMe__link">Facebook</a>
                        <a
                            href="https://github.com/smaginalexander?tab=repositories"
                            target="_blank"
                            rel="noreferrer"
                            className="aboutMe__link">Github</a>
                    </div>
                </div>
                <img className="aboutMe__image" src={portrait} alt="портрет студента" />
            </div>

        </section>
    )
}

export default AboutMe;