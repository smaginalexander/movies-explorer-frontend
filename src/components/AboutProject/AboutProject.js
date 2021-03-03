import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className="aboutProject">
            <div className="aboutProject__title-container">
                <p className="aboutProject__title">О проекте</p>
            </div>
            <div className="aboutProject__text-container">
                <div className="aboutProject__text-block">
                    <p className="aboutProject__subtitle">Дипломный проект включал 5 этапов</p>
                    <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="aboutProject__text-block">
                    <p className="aboutProject__subtitle">На выполнение диплома ушло 5 недель</p>
                    <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="aboutProject__diagramm">
                <div className="aboutProject__backend-time"><p>1 неделя</p></div>
                <div className="aboutProject__frontend-time">4 недели</div>
                <div className="aboutProject__description">Back-end</div>
                <div className="aboutProject__description-time">Front-end</div>
            </div>
        </section>
    )
}

export default AboutProject;
