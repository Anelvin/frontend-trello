import React, { Component } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import './BoardDetails.scss';
import { connect } from 'react-redux';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import Axios from 'axios';
import { saveTaskList } from '../../store/actions/taskListActions';

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

class BoardDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            
            
        }
    }

    componentDidMount () {
        console.log(this.props.match.params.board);
        let data = {
            board: this.props.match.params.board
        }
        Axios.post('http://localhost:3001/tasklist/findtasklist', data)
            .then(result => {
                console.log(result);
                this.props.setTasklist(result.data);
            })
        /*this.setState({
            columns:  this.props.columns.sort(function (a, b) {
                if (a.index > b.index){
                    return 1;
                }
                if (a.index < b.index){
                    return -1;
                }
    
                return 0;
            })
        })*/
       
    }

    handleClick = (e) => {
        console.log(e.target.id);
    }

    /*add = () => {
        let oldColumns = this.state.columns;
        let newColumn = {name: "Nueva Etiqueta", items:[], index:4};

        oldColumns.push(newColumn);
        this.setState({
            columns: oldColumns
        })
    }*/
    render(){
        return (
            <div>
                <div>
                    <HeaderDashboard />
                </div>
                <div style={{ display: "flex", height: "100%" }} className="constainer-list">
                    <DragDropContext
                        onDragEnd={result => {onDragEnd(result)}}
                    >
            {Object.entries(this.props.taskList).map(([columnId, column], index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                  key={columnId}
                >
                  <div style={{ margin: 8 }} className="list">
                  <input type="text" value={column.name} />
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              
                              padding: 4,
                              width: 250,
                              minHeight: 500
                            }}
                            className="tasklist"
                          >
                            {/*column.items.map((item, index) => {
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
                            })*/}
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
            <button className="button-add-tasklist" onClick={this.add}>+ Agragar una lista</button>
        </div>
    </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    boards: state.boardReducer.boards,
    taskList: state.taskListReducer.taskList
  }
}

const mapDispatchToProps = dispatch => {
    return {
        setTasklist: (tasklist) => dispatch(saveTaskList(tasklist))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (BoardDetails);
