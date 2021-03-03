import './App.css';
import '../../vendor/normolize.css';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <Movies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
        <Route path="/pre">
          <Preloader />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;