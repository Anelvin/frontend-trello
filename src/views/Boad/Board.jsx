import React, { Component, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4";

const onDragEnd = (result) => {
    console.log(result);
  /*if (!result.destination) return;
  const { source, destination } = result;
    console.log(source);
  if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId]; //Almacena la columna de origen con sus tareas 
      const destColumn = columns[destination.droppableId]; //Almacena la columna de destino con sus tareas
      const sourceItems = [...sourceColumn.items]; //Almacena las tareas de la columna origen
      const destItems = [...destColumn.items]; //Almacena las tareas de la columna de destino
      const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }*/
};

class Board extends Component {

    constructor(props){
        super(props);
        this.state = {
            columns: [
                {
                  name: "Requested",
                  items: [
                    { id: '10', content: "First task" },
                    { id: uuid(), content: "Second task" },
                    { id: uuid(), content: "Third task" },
                    { id: uuid(), content: "Fourth task" },
                    { id: uuid(), content: "Fifth task" }
                  ],
                  index: 3
                },
                {
                  name: "To do",
                  items: [
                  { id: uuid(), content: "Six" },
                  { id: uuid(), content: "Seven" }],
                  index: 2
                },
                {
                  name: "In Progress",
                  items: [
                  { id: uuid(), content: "Nine" },
                  { id: uuid(), content: "Ten" },
                  { id: uuid(), content: "Eleven" }],
                  index: 1
                },
                {
                  name: "Done",
                  items: [],
                  index: 0
                }
            ]
            
        }
    }

    componentDidMount () {
        this.setState({
            columns:  this.state.columns.sort(function (a, b) {
                if (a.index > b.index){
                    return 1;
                }
                if (a.index < b.index){
                    return -1;
                }
    
                return 0;
            })
        })
       
    }

    handleClick = (e) => {
        console.log(e.target.id);
    }

    add = () => {
        let oldColumns = this.state.columns;
        let newColumn = {name: "Nueva Etiqueta", items:[], index:4};

        oldColumns.push(newColumn);
        this.setState({
            columns: oldColumns
        })
    }
    render(){
        return (
        <div style={{ display: "flex", height: "100%" }}>
          <DragDropContext
            onDragEnd={result => {
                onDragEnd(result)}
            }
          >
            {Object.entries(this.state.columns).map(([columnId, column], index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                  key={columnId}
                >
                  <input type="text" value={column.name} />
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                                ? "lightblue"
                                : "lightgrey",
                              padding: 4,
                              width: 250,
                              minHeight: 500
                            }}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                      id={columnId}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none",
                                          padding: 16,
                                          margin: "0 0 8px 0",
                                          minHeight: "50px",
                                          backgroundColor: snapshot.isDragging
                                            ? "#263B4A"
                                            : "#456C86",
                                          color: "white",
                                          ...provided.draggableProps.style
                                        }}
                                      onClick={this.handleClick}>
                                        {item.content}
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
          <button onClick={this.add}>Agragar</button>
        </div>
      );
    }
}

export default Board;
