const stateInitial = {
    boards: {
                name: "Requested",
                items: [
                { id: '10', content: "First task" },
                { id: '15', content: "Second task" },
                { id: '20', content: "Third task" },
                { id: '25', content: "Fourth task" },
                { id: '30', content: "Fifth task" }
                ],
                index: 3
          },
}

function reducer(state = stateInitial, action){
    switch (action.type){
        default: 
            return state;
    }
}

export default reducer;