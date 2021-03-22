import React from 'react';
import './AboutMe.css';
import portrait from '../../images/avatar.jpg';

function AboutMe() {
    return (
        <section id="isme" className="aboutMe">
            <div className="aboutMe__title-container">
                <p className="aboutMe__title">Студент</p>
            </div>
            <div className="aboutMe__container">
                <div className="aboutMe__text-container">
                    <div>
                        <p className="aboutMe__name">Александр</p>
                        <p className="aboutMe__subtitle">Фронтенд-разработчик, 26 лет</p>
                        <p className="aboutMe__text">Я родился и живу в Москве, закончил факультет менеджмента МГУПП.
                        Прошел службу в армии. Я люблю слушать музыку, а ещё увлекаюсь фитнесом. Недавно начал кодить.
                        В 2020 году поступил на курс Яндекс.Практикум(веб-разработчик) и успешно его завершил.
                        </p>
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