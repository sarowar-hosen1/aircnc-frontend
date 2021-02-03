import loggedReducer from './loggedReducer';


import {combineReducers} from 'redux';


const allReducers = combineReducers({
    logged: loggedReducer,
})
export default allReducers