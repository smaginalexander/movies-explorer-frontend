import React from 'react';
import { Route } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SavedMoviesHeader from '../SavedMoviesHeader/SavedMoviesHeader';

function MoviesCardList() {
    return (
        <>
            <Route path="/movies">
                <section className="moviesCardList">
                    <div className="moviesCardList__elements">
                        <MoviesCard />
                    </div>
                    <div className="moviesCardList__button-container">
                        <button className="moviesCardList__button">Еще</button>
                    </div>
                </section>
            </Route>
            <Route path="/saved-movies">
                <section className="moviesCardList">
                    <div className="moviesCardList__elements">
                        <SavedMoviesHeader />
                    </div>
                </section>
            </Route>
        </>
    )
}

export default MoviesCardList;