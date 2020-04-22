const stateInitial = {
   boards: []
}

function reducer(state = stateInitial, action){
    switch (action.type){
        case 'SAVE_BOARDS':
            return {
                ...state,
                boards: action.payload
            }
        default: 
            return state;
    }
}

export default reducer;