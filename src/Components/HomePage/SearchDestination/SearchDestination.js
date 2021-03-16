import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import './SearchDestination.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { location, adult, child, arrival, checkout } from '../../../redux/Actions/index'

const SearchDestination = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const destination = useSelector(state => state.destination)
    const arrivalDate = useSelector(state => state.arrivalDate)
    const checkoutDate = useSelector(state => state.checkoutDate)
    const adults = useSelector(state => state.adults)
    const childs = useSelector(state => state.childs);

    const handleArrivalDate = (date) => {
        dispatch(arrival(date))
    }
    const handleCheckoutDate = (date) => {
        dispatch(checkout(date))
    }
    const handleLocation = (e) => {
        dispatch(location(e.target.value))
    }

    //handling adult Geust
    const handleAdultPlus = (e) => {
        dispatch(adult(adults + 1))
        e.preventDefault()
    }
    const handleAdultMinus = (e) => {
        if (adults > 1) {
            dispatch(adult(adults - 1))
        }
        e.preventDefault()
    }

    //handleLing child geues
    const handleChildPlus = (e) => {
        dispatch(child(childs + 1))
        e.preventDefault()
    }

    const handleChildMinus = (e) => {
        if (childs >= 1) {
            dispatch(child(childs - 1))
        }
        e.preventDefault()
    }

    return (
        <div className='destination'>
            <h5 className="font-weight-bold my-4">Where do you want ot go?</h5>
            <div className="location-div box-shadow">
                <label htmlFor="">Location</label><br />
                <input onChange={handleLocation} type="text" name="destination" className="w-100" required placeholder="Add city, Landmark or Address" required />
            </div>
            <div className='selected-date'>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box-shadow">
                                <KeyboardDatePicker
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Arrival"
                                    value={arrivalDate}
                                    onChange={handleArrivalDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box-shadow">
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Checkout"
                                    id="date-picker-inline"
                                    format="dd/MM/yyyy"
                                    value={checkoutDate}
                                    onChange={handleCheckoutDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </MuiPickersUtilsProvider>
            </div>

            <div className="select-person box-shadow">
                <div style={{ borderBottom: '1px solid #e4eeea', marginBottom: '20px' }}>
                    <h6 className="text-muted">Geust</h6>
                    <h6><span></span>{adults} Adults, <span></span>{childs} Childs</h6>
                </div>
                <form action="">
                    <div className='d-flex justify-content-between'>
                        <label htmlFor="">Adults</label>
                        <div>
                            <button onClick={handleAdultMinus} className='btn btn-none'><BiMinus /></button>
                            <input type="number" value={adults} name="adult" id="" />
                            <button onClick={handleAdultPlus} className='btn btn-none'><BsPlus /></button>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <label htmlFor="">Childs</label>
                        <div>
                            <button onClick={handleChildMinus} className='btn btn-none'><BiMinus /></button>
                            <input type="number" value={childs} name="adult" id="" />
                            <button onClick={handleChildPlus} className='btn btn-none'><BsPlus /></button>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <label htmlFor="">Babies</label>
                        <div>
                            <button className='btn btn-none' disabled><BiMinus /></button>
                            <input type="number" value={0} name="adult" id="" />
                            <button className='btn btn-none' disabled><BsPlus /></button>
                        </div>
                    </div>
                </form>
            </div>
            {
                destination ?
                    <button onClick={() => history.push('/search-results')} className={'btn-brand w-100'} >Search</button>
                    :
                    <button onClick={() => history.push('/search-results')} className={'btn btn-secondary w-100'} disabled >Search</button>

            }
        </div>
    );
};

export default SearchDestination;