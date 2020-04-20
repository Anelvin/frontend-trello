const stateInitial = {
    status: false
}

function reducer(state = stateInitial, action){
    switch (action.type){
        case 'CHANGE_TRUE':
            return {
                ...state,
                status: true
            }
        case 'CHANGE_FALSE':
            return {
                ...state,
                status: false
            }
        default:
            return state;
    }
}

export default reducer;