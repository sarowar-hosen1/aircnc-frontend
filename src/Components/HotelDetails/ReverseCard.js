import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './ReverseCard.css';

const ReverseCard = () => {
    const history = useHistory();

    const arrivalDate = useSelector(state => state.arrivalDate)
    const checkoutDate = useSelector(state => state.checkoutDate)

    //short date format for
    const arrivalYear = arrivalDate.getFullYear();
    const arrivalMonth = arrivalDate.getMonth();
    const arrivalDay = arrivalDate.getDate();

    console.log(arrivalDay);

    const checkoutYear = checkoutDate.getFullYear();
    const checkoutMonth = checkoutDate.getMonth();
    const checkoutDay = checkoutDate.getDate();
    
    return (
        <div className='reverse-card'>
            <h5>$34/ <span className='text-muted'>night</span></h5>
            <p className="text-muted">(250 Reviews)</p>
            <p className="font-weight-bold mb-1">Date</p>
            <div className='d-flex justify-content-between border pt-2 px-2'>
                <p>{`${arrivalYear}/${arrivalMonth+1}/${arrivalDay}`}</p>
                <p>-</p>
                <p>{`${checkoutYear}/${checkoutMonth+1}/${checkoutDay}`}</p>
            </div>
            <p className="font-weight-bold mt-4 mb-1">Guests</p>
            <select name="geust" className='w-100 py-2 form-control mb-2'>
                <option value="3">3 Guests</option>
                <option value="2">2 Guests</option>
                <option value="1">1 Guests</option>
            </select>
            <div className="d-flex justify-content-between">
                <p><small>$34/4 nights</small></p>
                <p><small>$136</small></p>
            </div>
            <div className="d-flex justify-content-between">
                <p><small>Cleaning free</small></p>
                <p><small>$10</small></p>
            </div>
            <div className="d-flex justify-content-between">
                <p><small>$Service free</small></p>
                <p><small>$15</small></p>
            </div>
            <div className="d-flex justify-content-between">
                <p><small className='font-weight-bold'>Total</small></p>
                <p><small className="font-weight-bold">$161</small></p>
            </div>
            <button className='btn-brand w-100' onClick={() => history.push('/booking-process')}>Reverse</button>
            <button className="btn btn-link text-muted mx-auto d-block" onClick={() => history.push('/booking-process')} >Don't change yet</button>
        </div>
    );
};

export default ReverseCard;