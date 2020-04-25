import React, { Component } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import './BoardDetails.scss';
import { connect } from 'react-redux';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import Axios from 'axios';
import { saveTaskList } from '../../store/actions/taskListActions';
import NewTask from '../../components/NewTask/NewTask';
import { boardActive } from '../../store/actions/boardActiveActions';

/*const onDragEnd = (result) => {
    console.log(result);
  if (!result.destination) return;
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
  }
};*/

class BoardDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            addTaskList: false,
            nameTaskList: '',
            addTask: false,
            idTaskList: null,
            tasklists: null
        }
    }

    componentDidMount () {
        let data = {
            board: this.props.boardActive
        }
        Axios.post('http://localhost:3001/tasklist/findtasklist', data)
            .then(result => {
                console.log(result);
                for(let i = 0; i < result.data.length; i++){
                  result.data[i].Tasks.sort(function (a, b) {
                    if (a.index > b.index) {
                      return 1;
                    }
                    if (a.index < b.index) {
                      return -1;
                    }
                    return 0;
                  })
                }
                this.props.setTasklist(result.data);
              })
           
    }

    onDragEnd = result => {
      console.log(result);
    }

    handleClick = (e) => {
        console.log(e.target.id);
    }

    newTaskList = async () => {
      this.setState({
        addTaskList:true
      });
    }

    cancelNewTaskList = () => {
      this.setState({
        addTaskList: false
      })
    }

    addNewTaskList = () => {
      let data = {
        email: this.state.nameTaskList,
        board: this.props.match.params.board,
        description: this.state.nameTaskList
      }
      Axios.post('http://localhost:3001/tasklist/create', data)
        .then(result => {
          console.log(result-data);
          this.props.setTasklist(result.data.taskLists);
          this.setState({
            addTaskList: false
          })
          .then(result => console.log('Hola'))
        })
    }

    addNewTask = (event) => {
      this.setState({
        idTaskList: event.target.id,
        addTask:true
      })
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleModal = () => {
      this.setState({
        addTask: !this.state.addTask
      })
    }

    render(){
        return (
            <div>
              <div>
                  <HeaderDashboard />
                  {this.state.addTask === true 
                  ?
                  <NewTask handleModal={this.handleModal} idTaskList={this.state.idTaskList}/>
                  :
                  null
                  }
              </div>
              <div style={{ display: "flex", height: "100%" }} className="constainer-list">
                  <DragDropContext
                      onDragEnd={result => {this.onDragEnd(result)}}
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
                          id={column.id}
                        >
                          <div style={{ margin: 8 }} className="list">
                          <input type="text" value={column.description} />
                            <Droppable droppableId={(column.id).toString()} key={columnId}>
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
                                    {column.Tasks.map(item => {
                                      return (
                                        <Draggable
                                          key={(item.id).toString()}
                                          draggableId={(item.id).toString()}
                                          index={item.index}
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
                                                {item.description}
                                              </div>
                                            );
                                          }}
                                        </Draggable>
                                      );
                                    })}
                                    <div>
                                      <button className="button-add-task" onClick={this.addNewTask} id={column.id}>+ Agregar una tarea</button>
                                    </div>
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
                  {this.state.addTaskList === true 
                  ? 
                    <div className="inputs-add-new-tasklist">
                      <input type="text" name="nameTaskList" value={this.state.nameTaskList} onChange={this.handleChange} placeholder="Introduce el titulo de la lista"/>
                      <div>
                        <button className="button-save" onClick={this.addNewTaskList}>Guardar</button>
                        <button className="button-cancel" onClick={this.cancelNewTaskList}>Cancelar</button>
                      </div>
                    </div>
                  :

                    <div>
                      <button className="button-add-tasklist" onClick={this.newTaskList}>+ Agragar una lista</button>
                    </div>
                }
              </div>
            </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    boards: state.boardReducer.boards,
    taskList: state.taskListReducer.taskList,
    boardActive: state.boardActiveReducer.board
  }
}
const mapDispatchToProps = dispatch => {
    return {
        setTasklist: (tasklist) => dispatch(saveTaskList(tasklist))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (BoardDetails);
