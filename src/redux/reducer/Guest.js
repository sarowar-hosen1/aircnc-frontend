const geustReducer = (state = 1, action) => {
    switch (action.type) {
        case 'GEUST':
            return action.payload;
        default:
            return state
    }
}
export default geustReducer;