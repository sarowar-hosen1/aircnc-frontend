import React, { createContext, useState } from 'react';
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

export const LocationContext = createContext();
export const ArrivaleDateContext = createContext();
export const CheckoutDateContext = createContext();
export const AdultContext = createContext();
export const ChildContext = createContext();

export const SearchContext = createContext();
function App() {
  const [location, setLocation] = useState(null)
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [checkoutDate, setCheckoutDate] = useState(new Date())
  const [adults, setAdults] = useState(1);
  const [child, setChild] = useState(1)


  return (
    <LocationContext.Provider value={[location, setLocation]}>
      <ArrivaleDateContext.Provider value={[arrivalDate, setArrivalDate]}>
        <CheckoutDateContext.Provider value={[checkoutDate, setCheckoutDate]}>
          <AdultContext.Provider value={[adults, setAdults]}>
            <ChildContext.Provider value={[child, setChild]}>
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
                  <Route exact path='/booking-process'>
                    <BookingProcess></BookingProcess>
                  </Route>
                  <Route exact path='/login'>
                    <Login></Login>
                  </Route>
                  <Route exact path='*'>
                    <NotFound></NotFound>
                  </Route>
                </Switch>
              </Router>
            </ChildContext.Provider>
          </AdultContext.Provider>
        </CheckoutDateContext.Provider>
      </ArrivaleDateContext.Provider>
    </LocationContext.Provider>
  );
}

export default App;
