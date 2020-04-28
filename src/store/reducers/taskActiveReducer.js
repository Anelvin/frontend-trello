const stateInitial = {
    task: 0 
}

function reducer(state = stateInitial, action){
    switch (action.type) {
        case 'SAVE_TASK_ACTIVE':
            return {
                ...state,
                task: action.payload
            }
    
        default:
            return state;
    }
}

export default reducer;