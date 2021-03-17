import React from 'react';
import { Route } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SavedMoviesHeader from '../SavedMoviesHeader/SavedMoviesHeader';

function MoviesCardList(props) {
    const [count, setCount] = React.useState(3);
    const addMoreMovies = () => {
        setCount(count + 3)
    }

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