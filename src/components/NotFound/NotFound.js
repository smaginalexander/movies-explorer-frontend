import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <section className="error">
            <div>
                <span className="error__number">404</span>
                <p className="error__text">Страница не найдена</p>
            </div>
            <Link className="error__link">назад</Link>
        </section>
    )
}

export default NotFound;