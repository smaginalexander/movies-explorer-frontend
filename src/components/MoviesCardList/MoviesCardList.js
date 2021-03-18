import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SavedMoviesHeader from '../SavedMoviesHeader/SavedMoviesHeader';

function MoviesCardList(props) {
    const [count, setCount] = React.useState(0);
    const [addMoreCards, setAddMoreCards] = React.useState(0);
    const addMoreMovies = () => {
        setCount(count + addMoreCards)
    }
    const displayWidthCheck = () => {
        const display = window.innerWidth
        if (display > 900) {
            setCount(12)
            setAddMoreCards(3)
        } else if (display > 750) {
            setCount(8)
            setAddMoreCards(2)
        } else if (display < 750) {
            setCount(5)
            setAddMoreCards(2)
        }
    }
    React.useEffect(() => {
        displayWidthCheck();
    }, [])

    return (
        <>
            <Route path="/movies">
                {props.cards ?
                    <section className="moviesCardList">
                        <div className="moviesCardList__elements">
                            {props.cards.length > 0 ?
                                props.cards.slice(0, count).map((card) => (
                                    <MoviesCard
                                        key={card.id}
                                        card={card}
                                        saveMovie={props.saveMovie}
                                        deleteMovie={props.deleteMovie}
                                    />)
                                ) : <p className="moviesCardList__text">фильмов пока нет</p>
                            }
                        </div>
                        <div className="moviesCardList__button-container">
                            {props.cards.length > count ?
                                <button onClick={addMoreMovies} className="moviesCardList__button">Еще</button> : ""
                            }
                        </div>
                    </section> : ""
                }
            </Route>
            <Route path="/saved-movies">
                <section className="moviesCardList">
                    <div className="moviesCardList__elements">
                        {props.savedCards.length > 0 ?
                            props.savedCards.slice(0, count).map((card) => (
                                <SavedMoviesHeader
                                    key={card.id}
                                    card={card}
                                    saveMovie={props.saveMovie}
                                    deleteMovie={props.deleteMovie}
                                />)
                            ) : <p className="moviesCardList__text">фильмов пока нет</p>
                        }
                    </div>
                    <div className="moviesCardList__button-container">
                        {props.savedCards.length > count ?
                            <button onClick={addMoreMovies} className="moviesCardList__button">Еще</button> : ""
                        }
                    </div>
                </section>
            </Route>
        </>
    )
}

export default MoviesCardList;