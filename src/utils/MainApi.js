const token = localStorage.getItem("jwt")
console.log(token);
export class MainApi {
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

    getUserInfo() {
        return fetch(
            `${this._url}/users/me`,
            {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${token}`,
                    "Content-type": 'application/json',
                },
            })
            .then(this._checkResult)
    }

    setUserInfo({ name, email }) {
        return fetch(
            `${this._url}/users/me`,
            {
                method: 'PATCH',
                headers: {
                    authorization: `Bearer ${token}`,
                    "Content-type": 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                })
            })
            .then(this._checkResult)
    }
    createMovie({ country, director, duration, year, description, image, trailer, thumbnail, nameEN, nameRU, movieId }) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                country: country,
                director: director,
                duration: duration,
                year: year,
                description: description,
                image: image,
                trailer: trailer,
                thumbnail: thumbnail,
                nameRU: nameRU,
                nameEN: nameEN,
                movieId: movieId
            })
        })
            .then(this._checkResult)
    }

    deleteMovie(movieId) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        })
            .then(this._checkResult)
    }

    getSavedMovies() {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        })
            .then(this._checkResult)
    }

    register = (name, email, password) => {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
            .then(this._checkResult)
    }

    authorize = (email, password) => {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(this._checkResult)
            .then((data) => {
                localStorage.setItem('jwt', data.token);
                console.log(data.token);
                return data;
            });
    }

    getContent = (token) => {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        })
            .then((res) => {
                try {
                    if (res.status === 200) {
                        return res.json();
                    }
                    if (res.status === 401) {
                        return console.log('Токен не передан или передан не в том формате')
                    }
                }
                catch (err) {
                    return err;
                };
            })
            .then((data) => {
                return data;
            });
    }
}

const mainApi = new MainApi({
    url: 'http://api.smag.students.nomoredomains.work',
    headers: {
        "Content-type": "application/json",
    },
})
export default mainApi