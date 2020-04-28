import React, { Component } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import './BoardDetails.scss';
import { connect } from 'react-redux';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import Axios from 'axios';
import { saveTaskList } from '../../store/actions/taskListActions';
import NewTask from '../../components/NewTask/NewTask';
import { boardActive } from '../../store/actions/boardActiveActions';
import ModalDescriptionTask from '../../components/ModalDescriptionTask/ModalDescriptionTask';
import { taskSave } from '../../store/actions/taskActiveAction';


class BoardDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            addTaskList: false,
            nameTaskList: '',
            addTask: false,
            idTaskList: null,
            tasklists: null,
            background:null,
            modalDescriptionTask: false
        }
    }

    componentDidMount () {
        let data = {
            board: this.props.boardActive
        }

        let boardId = {
          id: this.props.boardActive
        }

        Axios.post('http://localhost:3001/board/searchbyid', boardId)
          .then(result => {
           this.setState({
             background: result.data.background
           })
          });

        Axios.post('http://localhost:3001/tasklist/findtasklist', data)
          .then(result => {
            let data = result.data;
            console.log(data);
              data.sort(function (a, b) {
                if (a.id > b.id) {
                  return 1;
                }
                if (a.id < b.id) {
                  return -1;
                }
                return 0;
              })
              for(let i = 0; i < data.length; i++){
                data[i].Tasks.sort(function (a, b) {
                  if (a.index > b.index) {
                    return 1;
                  }
                  if (a.index < b.index) {
                    return -1;
                  }
                  return 0;
                })
              }
              this.props.setTasklist(data);
          })
           
    }

    onDragEnd = result => {
      console.log(result);
      let data = {
        originId: result.source.droppableId,
        originIndex: result.source.index,
        destId: result.destination.droppableId,
        destIndex: result.destination.index,
        board: this.props.boardActive
      }

      Axios.post('http://localhost:3001/task/changeoflist', data)
      .then(result => {
        let data = result.data;
              console.log(data);
                data.sort(function (a, b) {
                  if (a.id > b.id) {
                    return 1;
                  }
                  if (a.id < b.id) {
                    return -1;
                  }
                  return 0;
                })
                for(let i = 0; i < data.length; i++){
                  data[i].Tasks.sort(function (a, b) {
                    if (a.index > b.index) {
                      return 1;
                    }
                    if (a.index < b.index) {
                      return -1;
                    }
                    return 0;
                  })
                }
                this.props.setTasklist(data);
      })
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
          let data = result.data;
              console.log(data);
                data.sort(function (a, b) {
                  if (a.id > b.id) {
                    return 1;
                  }
                  if (a.id < b.id) {
                    return -1;
                  }
                  return 0;
                })
                for(let i = 0; i < data.length; i++){
                  data[i].Tasks.sort(function (a, b) {
                    if (a.index > b.index) {
                      return 1;
                    }
                    if (a.index < b.index) {
                      return -1;
                    }
                    return 0;
                  })
                }
                this.props.setTasklist(data);
          this.setState({
            addTaskList: false
          })
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

    handleModalDescriptionTask = () => {
      this.setState({
        modalDescriptionTask: !this.state.modalDescriptionTask
      })
    }

    openModalDescriptionTask = (event) => {
      event.preventDefault();
      console.log(event.target.id);
      this.props.taskSave(event.target.id)
      this.setState({
        modalDescriptionTask: !this.state.modalDescriptionTask
      })
    }

    render(){
        return (
            <div style={{backgroundImage: "url(/img/background/"+this.state.background+".jpg)"}} className="container-board-details">
              <div>
                  <HeaderDashboard />
                  {this.state.addTask === true 
                  ?
                  <NewTask handleModal={this.handleModal} idTaskList={this.state.idTaskList}/>
                  :
                  null
                  }
                  {this.state.modalDescriptionTask === true
                  ?
                  <ModalDescriptionTask handleModal={this.handleModalDescriptionTask}/>
                  :
                  null
                  }
              </div>
              <div style={{ display: "flex"}} className="container-list">
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
                          <input type="text" placeholder={column.description} />
                            <Droppable droppableId={(column.id).toString()} key={columnId}>
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
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
                                              onClick={this.openModalDescriptionTask}
                                                id={item.id}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={{
                                                  userSelect: "none",
                                                  padding: 16,
                                                  margin: "0 0 8px 0",
                                                  minHeight: "50px",
                                                  backgroundColor: snapshot.isDragging
                                                    ? "#ffffff"
                                                    : "#ffffff",
                                                  color: "#172b4d",
                                                  ...provided.draggableProps.style
                                                }}
                                                 className="tags">
                                                <p id={item.id} >{item.name}</p>
                                                
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
        setTasklist: (tasklist) => dispatch(saveTaskList(tasklist)),
        taskSave: (task) => dispatch(taskSave(task))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (BoardDetails);
