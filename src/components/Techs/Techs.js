import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <section className="techs">
            <div className="techs__title-container">
                <p className="techs__title">Технологии</p>
            </div>
            <div className="techs__text-container">
                <p className="techs__subtitle">7 технологий</p>
                <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <div className="techs__container">
                <div className='techs__block' >HTML</div>
                <div className='techs__block' >CSS</div>
                <div className='techs__block' >JS</div>
                <div className='techs__block' >React</div>
                <div className='techs__block' >Git</div>
                <div className='techs__block' >Express.js</div>
                <div className='techs__block' >MongoDB</div>
            </div>
        </section>
    )
}

export default Techs;