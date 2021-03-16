import React, { useState } from 'react';
import ReverseCard from '../HotelDetails/ReverseCard';
import HouseRole from './HouseRole';
import Payment from './Payment';
import WhoIsComming from './WhoIsComming';

const BookingProcess = () => {
    const [firstSetp, setFirstStep] = useState(true);
    const [secondStep, setSecondStep] = useState(true)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-12">
                        <div className={firstSetp ? "d-block": "d-none"}>
                            <HouseRole setFirstStep={setFirstStep}></HouseRole>
                        </div>
                        <div className={firstSetp ? "d-none": secondStep ? "d-block" : "d-none"}>
                            <WhoIsComming setSecondStep={setSecondStep}></WhoIsComming>
                        </div>
                        <div className={firstSetp ? "d-none": secondStep ? "d-none": "block"}>
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