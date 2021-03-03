import React from 'react'
import './Preloader.css'

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="preloader__container">
                <div className="preloader__small-container">
                    <p className="preloader__text">Загрузка</p>
                </div>
            </div>
        </div>
    )
};

export default Preloader