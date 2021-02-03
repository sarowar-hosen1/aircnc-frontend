import React from 'react';
import { Link } from 'react-router-dom';
import './HotelList.css';

const HotelList = ({ hotel, hanldeSearchDetails }) => {
    const { name, price, picture, _id } = hotel;

    return (

        <div className='d-flex justify-content-between hotel-card'>
            <img className='img-fluid' src={picture} alt="" />
            <div style={{ width: '60%', paddingLeft: '20px' }}>
                <Link to={`/details/${_id}`}>
                    <h6>{name}</h6>
                </Link>
                <p className='text-muted'>4 Geuests 2 bedrooms 2 Baths</p>
                <p className='text-muted'>Wifi Air Conditions Kitchen</p>
                <p className='text-muted'>Cencellation Flexibility available</p>
                <div className='d-flex justify-content-between'>
                    <p>4.9(20)</p>
                    <div>
                        <h6>${price}/Night</h6>
                        <p>$152 Total</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelList;