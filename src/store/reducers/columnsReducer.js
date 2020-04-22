const stateInitial = {
    columns: [
      {
          name: "Requested",
          items: [
            { id: '10', content: "First task" },
            { id: '11', content: "Second task" },
            { id: '12', content: "Third task" },
            { id: '13', content: "Fourth task" },
            { id: '14', content: "Fifth task" }
          ],
          index: 3
        },
        {
          name: "To do",
          items: [
          { id: '15', content: "Six" },
          { id: '16', content: "Seven" }],
          index: 2
        },
        {
          name: "In Progress",
          items: [
          { id: '17', content: "Nine" },
          { id: '18', content: "Ten" },
          { id: '19', content: "Eleven" }],
          index: 1
        },
        {
          name: "Done",
          items: [],
          index: 0
        }
    ]
}

function reducer(state = stateInitial, action){
    switch (action.type) {

        default:
            return state;
    }
}

export default reducer;