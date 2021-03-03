import React from 'react';
import './SavedMoviesHeader.css';
import firstFilm from '../../images/fim_1.png';
import deleteIcon from '../../images/delete.svg';

function SavedMoviesHeader() {
    return (
        <>
            <div className="moviesCard">
                <img className="moviesCard__image" src={firstFilm} alt="девушка у машины" />
                <div className="moviesCard__description">
                    <div className="moviesCard__container">
                        <p className="moviesCard__text">33 слова о дизайне</p>
                        <img className="moviesCard__like" src={deleteIcon} alt="иконка удаления" />
                    </div>
                    <p className="moviesCard__duration">1ч 21м</p>
                </div>
            </div>
            <div className="moviesCard">
                <img className="moviesCard__image" src={firstFilm} alt="девушка у машины" />
                <div className="moviesCard__description">
                    <div className="moviesCard__container">
                        <p className="moviesCard__text">33 слова о дизайне</p>
                        <img className="moviesCard__like" src={deleteIcon} alt="иконка удаления" />
                    </div>
                    <p className="moviesCard__duration">1ч 21м</p>
                </div>
            </div>
            <div className="moviesCard">
                <img className="moviesCard__image" src={firstFilm} alt="девушка у машины" />
                <div className="moviesCard__description">
                    <div className="moviesCard__container">
                        <p className="moviesCard__text">33 слова о дизайне</p>
                        <img className="moviesCard__like" src={deleteIcon} alt="иконка удаления" />
                    </div>
                    <p className="moviesCard__duration">1ч 21м</p>
                </div>
            </div>
        </>
    )
}

export default SavedMoviesHeader;