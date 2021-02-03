import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AdultContext, ArrivaleDateContext, CheckoutDateContext, LocationContext } from '../../App';
import Navbar from '../Shared/Navbar/Navbar';
import GoogleMap from './GoogleMap/GoogleMap';
import HotelList from './HotelList/HotelList';

const SearchResults = () => {
    const history = useHistory();
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetch('https://lit-refuge-15352.herokuapp.com/hotels')
            .then(res => res.json())
            .then(result => setHotels(result))
    }, [])
    
    const [location, setLocation] = useContext(LocationContext);
    const [arrivalDate, setArrivalDate] = useContext(ArrivaleDateContext);
    const [checkoutDate, setCheckoutDate] = useContext(CheckoutDateContext);
    const [adults, setAdults] = useContext(AdultContext);

    return (
        <>
            <Navbar></Navbar>
            <div className="">
                <div className="row">
                    <div className="col-md-5 offset-1 col-sm-12 col-12">
                        <div className="hotel-list mt-4">
                            <p className="text-muted m-2 font-weight-bold">152 stays {arrivalDate.toDateString()} - {checkoutDate.toDateString()} {adults} guests</p>
                            <h4 className="m-2">Stay in {location}</h4>
                            <div className="filter">
                                <button className='btn-filter'>Cencellation flexibility</button>
                                <button className='btn-filter'>Type of Place</button>
                                <button className='btn-filter'>Price</button>
                                <button className='btn-filter'>More filter</button>
                            </div>
                        </div>
                        {
                            hotels.map((hotel) => <HotelList hotel={hotel} key={155}></HotelList>)
                        }
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                        <GoogleMap></GoogleMap>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchResults;