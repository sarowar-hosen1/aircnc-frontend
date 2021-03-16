const checkoutReducer = (state = new Date(), action) => {
    switch (action.type){
        case 'CHECKOUT_DATE':
            return action.payload;
        default: 
            return state
        
    }
}
export default checkoutReducer;