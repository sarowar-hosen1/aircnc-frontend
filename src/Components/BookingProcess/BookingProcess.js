import React, { useState } from 'react';
import ReverseCard from '../HotelDetails/ReverseCard';
import HouseRole from './HouseRole';
import Payment from './Payment';
import WhoIsComming from './WhoIsComming';

const BookingProcess = () => {
    const [nextStep, setNextStep] = useState(false);
    const handleNextStep = () => {
        setNextStep(true)
    }
 
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-12">
                        <div className={nextStep ? 'd-none' : 'd-block'}>
                            <HouseRole handleNextStep={handleNextStep} key={55}></HouseRole>
                        </div>
                        <div className={nextStep ? 'd-block' : 'd-none'}>
                            <Payment></Payment>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                        <ReverseCard></ReverseCard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingProcess;