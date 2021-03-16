import locationReducer from './locationReducer';
import arrivalReducer from './arrivalReducer';
import checkoutReducer from './checkoutReducer';
import adultRducer from './adultReducer';
import childReducer from './childReducer';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    destination: locationReducer,
    arrivalDate: arrivalReducer,
    checkoutDate: checkoutReducer,
    adults: adultRducer, 
    childs: childReducer,
})
export default allReducers;