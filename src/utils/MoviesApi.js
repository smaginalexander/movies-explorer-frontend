export class MoviesApi {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _checkResult(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getMovies() {
        return fetch(
            `${this._url}`,
            {
                method: 'GET',
                headers: this._headers,
            })
            .then(this._checkResult)
    }

}

const moviesApi = new MoviesApi({
    url: ' https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        "Content-type": "application/json",
    },
})
export default moviesApi