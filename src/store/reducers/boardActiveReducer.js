const stateInitial = {
    board: 0
}

function reducer(state = stateInitial, action){
    switch (action.type) {
        case 'SAVE_BOARD_ACTIVE':
            return {
                ...state,
                board: action.payload
            }
    
        default:
            return state;
    }
}

export default reducer;