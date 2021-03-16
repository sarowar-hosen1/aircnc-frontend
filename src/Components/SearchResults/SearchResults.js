import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import GoogleMap from './GoogleMap/GoogleMap';
import HotelList from './HotelList/HotelList';
import SearchResultPreloader from '../Preloader/SearchResultPreloader'

const SearchResults = () => {
    const history = useHistory();
    const [hotels, setHotels] = useState([]);
    const adults = useSelector(state => state.adults);
    const childs = useSelector(state => state.childs);
    const arrivalDate = useSelector(state => state.arrivalDate);
    const checkoutDate = useSelector(state => state.checkoutDate)
    const destination = useSelector(state => state.destination);
    
    useEffect(() => {
        fetch('https://aircnc-hotel.herokuapp.com/hotels')
            .then(res => res.json())
            .then(result => setHotels(result))
    }, [])



    return (
        <>
            <Navbar></Navbar>
            <div className="">
                <div className="row">
                    <div className="col-md-5 offset-md-1 col-sm-12 col-12">
                        <div className="hotel-list mt-4">
                            <p className="text-muted m-2 font-weight-bold">152 stays {arrivalDate.toDateString()} - {checkoutDate.toDateString()} {adults} guests</p>
                            <h4 className="m-2">Stay in {destination}</h4>
                            <div className="filter">
                                <button className='btn-filter'>Cencellation flexibility</button>
                                <button className='btn-filter'>Type of Place</button>
                                <button className='btn-filter'>Price</button>
                                <button className='btn-filter'>More filter</button>
                            </div>
                        </div>
                        {
                            hotels.length ?
                                hotels.map((hotel) => <HotelList hotel={hotel} key={155}></HotelList>)
                                :
                                <SearchResultPreloader></SearchResultPreloader>
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