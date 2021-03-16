import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import masterCard from '../../images/bank_master_card.png';
import visa from '../../images/bank_visa.png';
import amex from '../../images/bank_amex.png';
import './BookingProcess.css'

const promise = loadStripe("pk_test_51I0rIGAfYxZFqGk2vKYzSl3EG3Nn4X3oBVRj3RJONgawEkiyNCrut1eDdyPwCqsfQ1nUB33pRCQ3DwqSpYWwyn2h00ainEb7xK")

const Payment = () => {
    return (
        <div className="mt-5">
            <h4 className='mb-4'>Payment</h4>
            <div className='payment box-shadow p-2'>
                <div className='d-flex'>
                    <div>
                        <h5>Creadit Card</h5>
                        <p className="text-muted">Safe money transfer with using you bank account</p>
                    </div>
                    <div className='d-flex'>
                        <img style={{ height: '30px', marginRight: '5px' }} src={masterCard} alt="" />
                        <img style={{ height: '30px', marginRight: '5px' }} src={amex} alt="" />
                        <img style={{ height: '30px', marginRight: '5px' }} src={visa} alt="" />
                    </div>
                </div>
                <div className="">
                    <Elements stripe={promise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;