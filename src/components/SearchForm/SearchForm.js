import React from 'react';
import './SearchForm.css';
import searchIcon from '../../images/searchIcon.svg'
import lupIcon from '../../images/lupIcon.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
    const [searchMovie, setSearchMovie] = React.useState('')

    const handleSearchMovie = (evt) => {
        setSearchMovie(evt.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearchSubmit(searchMovie)
    }

    return (
        <section className="searchForm" >
            <form onSubmit={handleSubmit} className="searchForm__form">
                <img className="searchForm__lupIcon" src={lupIcon} alt="иконка поиска" />
                <input onChange={handleSearchMovie} className="searchForm__input" placeholder="Фильм" />
                <button className="searchForm__button">
                    <img className="searchForm__icon" src={searchIcon} alt="иконка поиска" />
                </button>
            </form>
            <div className="searchForm__container">
                <FilterCheckbox filterFlims={props.filterFlims} isFilter={props.isFilter} />
                <p className="searchForm__text">Короткометражки</p>
            </div>
            <span className="register__error">{props.errorMessage}</span>
        </section>
    )
}

export default SearchForm;