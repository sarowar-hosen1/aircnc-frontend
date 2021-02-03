const arrivalDateReducer = (state = new Date(), action) => {
    switch (action.type) {
        case 'ARRIVAL':
            return action.payload
        default:
            return state;
    }
}
export default arrivalDateReducer;