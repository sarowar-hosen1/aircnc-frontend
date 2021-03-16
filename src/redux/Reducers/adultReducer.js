const adultRducer = (state = 2, action) => {
    switch (action.type) {
        case "ADULT":
            return action.payload
        default:
            return state;
    }
}
export default adultRducer;