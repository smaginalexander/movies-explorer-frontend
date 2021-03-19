import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
    return (
        <main className="content">
            <SearchForm
                errorMessage={props.errorMessage}
                onSearchSubmit={props.onSearchSubmit}
                filterFlims={props.filterFlims}
                isFilter={props.isFilter} />
            {props.preloaderIsActive ? <Preloader /> : ''}
            <MoviesCardList
                cards={props.cards}
                savedCards={props.savedCards}
                saveMovie={props.saveMovie}
                deleteMovie={props.deleteMovie}
                isLiked={props.isLiked}
            />
        </main>
    )
}

export default Movies;