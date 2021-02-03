const childReducer = (state = 1, action) => {
    switch(action.type){
        case 'CHILD':
            return action.payload;
        default:
            return state;
    }
}
export default childReducer;