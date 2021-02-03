import React from 'react';
import cart from '../../images/cart.png'
import pets from '../../images/pets.png';
import forbidden from '../../images/forbidden.png';
import smoke from '../../images/smoke.png'
import './HouseRole.css';

const HoseRole = ({handleNextStep}) => {
    return (
        <div>
            <div className="house-role">
                <h6>1. Review house role &#8594; 2. Who is comming &#8594; 3.Confirm & Pay</h6>
                <h3 className='my-4'>Review house role</h3>
                <h5 className='mb-4'>3 Night in Dhaka</h5>
                <div className="d-flex justify-content-between w-75">
                    <h6 className="text-muted">Check in: 14:00</h6>
                    <h6 className="text-muted">Check out: 12:00</h6>
                </div>
                <p className='text-muted my-4'>Self check in with building staff</p>
                <hr />
                <h5 className='mb-4'>Thing t keep the mind</h5>
                <ul className='list-unstyled'>
                    <li><img src={cart} alt="" />Suitable for children and infants</li>
                    <li><img src={pets} alt="" />Pets allowed</li>
                    <li><img src={forbidden} alt="" />No parties or event</li>
                    <li><img src={smoke} alt="" />Smoke allowed</li>
                </ul>
                <button onClick={() => handleNextStep()} className='btn-brand px-5'>Continue & agree</button>
            </div>
        </div>
    );
};

export default HoseRole;