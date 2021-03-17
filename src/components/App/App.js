import './App.css';
import '../../vendor/normolize.css';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import React from 'react';

import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: ''
  });
  const [cards, setCards] = React.useState([]);
  const [savedCards, setSavedCards] = React.useState([]);
  const [preloaderIsActive, setPreloaderIsActive] = React.useState(false);
  const [isFilter, setIsFilter] = React.useState(false);
  const history = useHistory()
  const location = useLocation();

  React.useEffect(() => {
    mainApi.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(err => console.log(err))
  }, []);

  const handleUpdateUser = function ({ name, email }) {
    mainApi.setUserInfo({ name, email })
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((error) => console.error(error))
  };

  const onRegisterSubmit = (name, email, password) => {
    mainApi.register(name, email, password)
      .then((res) => {
        if (res) {
          history.push('/signin');
          setErrorMessage('');
        }
      })
      .catch((err) => {
        if (err === 'Ошибка: 400') {
          setErrorMessage('Hекорректно заполнено одно из полей')
        } else if (err === 'Ошибка: 409') {
          setErrorMessage('Пользватель с таким адресом уже существует')
        }
      })
  }

  const filterFlims = () => {
    if (!isFilter) {
      const newFilmsList = cards.filter(item => item.duration <= 40)
      const newSavedFilmsList = savedCards.filter(item => item.duration <= 40)
      setCards(newFilmsList);
      setSavedCards(newSavedFilmsList)
      setIsFilter(true)
    } else {
      mainApi.getSavedMovies()
        .then(res => setSavedCards(res))
        .catch(err => console.log(err))
      moviesApi.getMovies()
        .then(res => setCards(res))
        .catch(err => console.log(err))
      setCards(cards)
      setSavedCards(savedCards)
      setIsFilter(false)
    }
  }

  const onSearchSubmit = (searchMovie) => {
    if (location.pathname === '/saved-movies') {
      setPreloaderIsActive(true)
      mainApi.getSavedMovies()
        .then((savedMovies) => {
          const foundFilms = savedMovies.filter
            (item => item.nameRU.toLowerCase().includes(searchMovie.toLowerCase())
              || item.nameEN.toLowerCase().includes(searchMovie.toLowerCase())
            )
          setSavedCards(foundFilms);
        })
        .catch(() => {
          setErrorMessage('Во время запроса произошла ошибка.Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        })
        .finally(() => {
          setPreloaderIsActive(false)
        })
    } else {
      setPreloaderIsActive(true)
      moviesApi.getMovies()
        .then((res) => {
          const foundCorrectFilms = res.filter((item) => item.nameEN !== null);
          const foundFilms = foundCorrectFilms.filter
            (item => item.nameRU.toLowerCase().includes(searchMovie.toLowerCase())
              || item.nameEN.toLowerCase().includes(searchMovie.toLowerCase())
            )
          setCards(foundFilms)
          setErrorMessage('')
        })
        .catch(() => {
          setErrorMessage('Во время запроса произошла ошибка.Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        })
        .finally(() => {
          setPreloaderIsActive(false)
        })
    }
  }

  const onLoginSubmit = (email, password) => {
    mainApi.authorize(email, password)
      .then((res) => {
        if (res) {
          setLoggedIn(true)
          history.push('/movies');
          setErrorMessage('');
        }
      })
      .catch((err) => {
        if (err === 'Ошибка: 400') {
          setErrorMessage('Hекорректно заполнено одно из полей')
          return
        } if (err === 'Ошибка: 401') {
          setErrorMessage('пользователь с таким email не найден ')
          return
        } else {
          setErrorMessage(err)
        }
      })
  }
  // проверка токена
  const tokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      let jwt = localStorage.getItem('jwt');
      mainApi.getContent(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push('/movies');
          } else {
            console.log(res)
          }
        })
        .catch((err) => {
          setLoggedIn(false);
          console.log("некорректный токен");
        })
    }
  }

  React.useEffect(() => {
    tokenCheck();
    // eslint-disable-next-line
  }, [loggedIn]);


  //выход из аккаунта
  const exitFromPriofile = () => {
    history.push('/signin')
    setLoggedIn(false);
    localStorage.removeItem('jwt')
    setCurrentUser({
      name: '',
      email: ''
    })
  }
  //вывод сохраненных фильмов
  const getSavedMoviesList = () => {
    setPreloaderIsActive(true)
    mainApi.getSavedMovies()
      .then((savedMovies) => {
        const omnerSavedMovies = savedMovies.filter(item => item.owner === currentUser._id)
        setSavedCards(omnerSavedMovies);
      })
      .catch(() => {
        setErrorMessage('Во время запроса произошла ошибка.Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      .finally(() => {
        setPreloaderIsActive(false)
      })
  }

  // сохранить фильм
  const saveMovie = (movieInfo) => {
    mainApi.createMovie(movieInfo)
      .then(() => {
        getSavedMoviesList();
      })
  }

  // удалить фильм 
  const deleteMovie = (card) => {
    const cardId = card.id
    if (location.pathname === '/movies') {
      const isIsaveddMovie = savedCards.find((item) => item.movieId === cardId);
      mainApi.deleteMovie(isIsaveddMovie._id)
        .then(() => {
          getSavedMoviesList();
        })
    } else {
      mainApi.deleteMovie(card._id)
        .then(() => {
          getSavedMoviesList();
        })
    }
  }

  // отображение сохраненных фильмов
  React.useEffect(() => {
    getSavedMoviesList();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute path="/movies"
            preloaderIsActive={preloaderIsActive}
            errorMessage={errorMessage}
            saveMovie={saveMovie}
            savedCards={savedCards}
            deleteMovie={deleteMovie}
            loggedIn={loggedIn}
            component={Movies}
            cards={cards}
            onSearchSubmit={onSearchSubmit}
            filterFlims={filterFlims}
            isFilter={isFilter}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            savedCards={savedCards}
            deleteMovie={deleteMovie}
            component={Movies}
            onSearchSubmit={onSearchSubmit}
            filterFlims={filterFlims}
            isFilter={isFilter} />
          <ProtectedRoute path="/profile" loggedIn={loggedIn} component={Profile}
            exitFromPriofile={exitFromPriofile}
            handleUpdateUser={handleUpdateUser}
          />
          <Route path='/signup'>
            <Register onRegisterSubmit={onRegisterSubmit} errorMessage={errorMessage} />
          </Route>
          <Route path='/signin'>
            <Login onLoginSubmit={onLoginSubmit} errorMessage={errorMessage} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {location.pathname !== '/signin' &&
          location.pathname !== '/signup' &&
          location.pathname !== '/profile'
          ? <Footer /> : ''}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;