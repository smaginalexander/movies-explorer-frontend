import React from 'react';
import './SearchForm.css';
import searchIcon from '../../images/searchIcon.svg'
import lupIcon from '../../images/lupIcon.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <section className="searchForm">
            <form className="searchForm__form">
                <img className="searchForm__lupIcon" src={lupIcon} alt="иконка поиска" />
                <input className="searchForm__input" placeholder="Фильм" />
                <button className="searchForm__button">
                    <img className="searchForm__icon" src={searchIcon} alt="иконка поиска" />
                </button>
            </form>
            <div className="searchForm__container">
                <FilterCheckbox />
                <p className="searchForm__text">Короткометражки</p>
            </div>
        </section>
    )
}

export default SearchForm;