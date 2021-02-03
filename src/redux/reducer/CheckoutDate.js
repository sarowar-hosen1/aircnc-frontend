const checkoutDateReducer = (state = new Date(), action) => {
    switch (action.type) {
        case 'CHECKOUT':
            return action.payload
        default:
            return state
    }
}
export default checkoutDateReducer;