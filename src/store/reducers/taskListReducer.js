const stateInitial = {
    taskList: []
 }
 
 function reducer(state = stateInitial, action){
     switch (action.type){
         case 'SAVE_TASKLIST':
             return {
                 ...state,
                 taskList: action.payload
             }
         default: 
             return state;
     }
 }
 
 export default reducer;