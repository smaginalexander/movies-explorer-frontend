import React from 'react';
import './MoviesCard.css';
import like from '../../images/like.svg'
import unlike from '../../images/unlike.svg'
function MoviesCard(props) {
    const [isLiked, setIsLiked] = React.useState(false);

    const timeformat = (duration) => {
        const hours = Math.floor(duration / 60)
        const min = duration % 60;
        return `${hours > 0 ? hours + 'ч ' : ''}${min}м`
    }
    const addMovie = () => {
        props.saveMovie({
            country: props.card.country,
            director: props.card.director,
            duration: props.card.duration,
            year: props.card.year,
            description: 'В конце',
            image: `https://api.nomoreparties.co${props.card.image.url}`,
            trailer: props.card.trailerLink,
            thumbnail: `https://api.nomoreparties.co${props.card.image.formats.thumbnail.url}`,
            nameRU: props.card.nameRU,
            nameEN: props.card.nameEN,
            movieId: props.card.id,
        })
    }

    const likeMovie = () => {
        addMovie();
        setIsLiked(true)
    }
    const unlikeMovie = () => {
        props.deleteMovie(props.card)
        setIsLiked(false)
    }


    return (
        <div className="moviesCard">
            <a href={props.card.trailerLink} target="_blank" rel="noreferrer">
                <img className="moviesCard__image" src={`https://api.nomoreparties.co${props.card.image ? props.card.image.url : '/uploads/all_tommoros_parties_33a125248d.jpeg'}`} alt="постер" />
            </a>
            <div className="moviesCard__description">
                <div className="moviesCard__container">
                    <p className="moviesCard__text">{props.card.nameRU}</p>
                    {isLiked ?
                        <img
                            onClick={unlikeMovie}
                            className="moviesCard__like"
                            src={like}
                            alt="лайк" /> :
                        <img
                            onClick={likeMovie}
                            className="moviesCard__like"
                            src={unlike}
                            alt="лайк" />
                    }
                </div>
                <p className="moviesCard__duration">{timeformat(props.card.duration)}</p>
            </div>
        </div>
    )
}

export default MoviesCard;