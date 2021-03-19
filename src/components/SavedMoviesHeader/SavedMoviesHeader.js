import React from 'react';
import './SavedMoviesHeader.css';
import deleteIcon from '../../images/delete.svg';

function SavedMoviesHeader(props) {
    const timeformat = (duration) => {
        const hours = Math.floor(duration / 60)
        const min = duration % 60;
        return `${hours > 0 ? hours + 'ч ' : ''}${min}м`
    }
    // console.log(props.card);
    const deleteMovie = () => {
        props.deleteMovie(props.card)
    }

    return (
        <div className="moviesCard">
            <img className="moviesCard__image" src={props.card.image} alt="постер" />
            <div className="moviesCard__description">
                <div className="moviesCard__container">
                    <p className="moviesCard__text">{props.card.nameRU}</p>
                    <img
                        onClick={deleteMovie}
                        className="moviesCard__like"
                        src={deleteIcon}
                        alt="иконка удаления" />
                </div>
                <p className="moviesCard__duration">{timeformat(props.card.duration)}</p>
            </div>
        </div>
    )
}

export default SavedMoviesHeader;