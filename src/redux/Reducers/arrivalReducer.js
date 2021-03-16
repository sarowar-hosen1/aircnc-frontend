const arrivalReducer = (state = new Date(), action) => {
    switch (action.type){
        case 'ARRIVAL_DATE':
            return action.payload
        default:
            return state
    }
}
export default arrivalReducer;