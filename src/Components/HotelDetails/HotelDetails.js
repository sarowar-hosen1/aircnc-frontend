import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { FaHome, FaCheckSquare, FaUserAlt, FaSprayCan } from 'react-icons/fa';
import user from '../../images/user.jpg';
import hotel1 from '../../images/hotel1.jpg';
import hotel2 from '../../images/hotel2.jpeg';
import ReverseCard from './ReverseCard';
import { AdultContext, ArrivaleDateContext, CheckoutDateContext } from '../../App';

const HotelDetails = () => {
    const [hotelDetails, setHotelDetails] = useState([]);
    const { name, description } = hotelDetails;

    useEffect(() => {
        fetch('https://lit-refuge-15352.herokuapp.com/details/60153a56361490296cd32218', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => setHotelDetails(data[0]))

    }, [])

    const [arrivalDate, setArrivalDate] = useContext(ArrivaleDateContext);
    const [checkoutDate, setCheckoutDate] = useContext(CheckoutDateContext);
    const [adults, setAdults] = useContext(AdultContext);

    return (

        <>
            <Navbar></Navbar>
            <div className="d-flex">
                <div>
                    <img style={{height:'300px'}} src={hotel1} alt="" className="img-fluid" />
                </div>
                <div>
                    <img style={{height:'300px'}} src={hotel2} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-12">
                        <div className="py-5">
                            <div>
                                <div className='d-flex justify-content-between'>
                                    <h4>{name}</h4>
                                    <div>
                                        <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={user} alt="" />
                                        <p className='text-center'><small>Sarowar</small></p>
                                    </div>
                                </div>
                                <p className="text-muted">Dhaka Bangladesh</p>
                                <p className="text-muted">{adults} Guests, 2 beedroms, 2 beds, 2 baths</p>
                                <hr />
                            </div>
                            <div className="d-flex mb-2">
                                <i className='text-muted mr-3'><FaHome /></i>
                                <div>
                                    <h5 className="text-muted">Entire Home</h5>
                                    <p className="text-muted">You'll have the condominium to yourself</p>
                                </div>
                            </div>
                            <div className="d-flex mb-2">
                                <i className='text-muted mr-3'><FaCheckSquare /></i>
                                <div>
                                    <h5 className="text-muted">Check In</h5>
                                    <p className="text-muted">We can check in with the doorman</p>
                                </div>
                            </div>
                            <div className="d-flex mb-2">
                                <i className='text-muted mr-3'><FaSprayCan /></i>
                                <div>
                                    <h5 className="text-muted">Sparkling Clean</h5>
                                    <p className="text-muted">Most regular geust said this place was sparkling clean.</p>
                                </div>
                            </div>
                            <div className="d-flex mb-2">
                                <i className='text-muted mr-3'><FaUserAlt /></i>
                                <div>
                                    <h5 className="text-muted">Rodraw in super host</h5>
                                    <p className="text-muted">Super host are experienced. Higly related host who are commited to providing great stay for geust</p>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <p className="text-muted">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                        <ReverseCard arrivalDate={arrivalDate} checkoutDate={checkoutDate} key={109}></ReverseCard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotelDetails;