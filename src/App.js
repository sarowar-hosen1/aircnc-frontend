import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import SearchResults from './Components/SearchResults/SearchResults';
import NotFound from './Components/NotFound/NotFound';
import HotelDetails from './Components/HotelDetails/HotelDetails';
import BookingProcess from './Components/BookingProcess/BookingProcess';
import Login from './Components/Login/Login';
import ForgotPasswor from './Components/Login/ForgotPasswor';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage></HomePage>
        </Route>
        <Route exact path='/search-results'>
          <SearchResults></SearchResults>
        </Route>
        <Route exact path='/details/:id'>
          <HotelDetails></HotelDetails>
        </Route>
        <PrivateRoute exact path='/booking-process'>
          <BookingProcess></BookingProcess>
        </PrivateRoute>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/forgot-password'>
          <ForgotPasswor></ForgotPasswor>
        </Route>
        <Route exact path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
