const locationReducer = (state = "", action) => {
    switch (action.type) {
        case "DESTINATION":
            return action.payload;
        default:
            return state
    }
}
export default locationReducer;