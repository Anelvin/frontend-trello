const stateInitial = {
    user: {}
}

function reducer(state = stateInitial, action){
    switch (action.type) {
        case 'SAVE_USER':
            return {
                ...state,
                user: action.payload
            }
    
        default:
            return state;
    }
}

export default reducer;