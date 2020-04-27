import React, {Component} from 'react';
import './NewTask.scss';
import { connect } from 'react-redux';
import Axios from 'axios';
import { saveTaskList } from '../../store/actions/taskListActions';

class NewTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskName: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        let data = {
            name: this.state.taskName,
            tasklist: this.props.idTaskList,
            board: this.props.boardActive
        }
        Axios.post('http://localhost:3001/task/create', data)
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
                this.props.handleModal();
            })
    }

    closeModal = () => {
        this.props.handleModal();
    }

    render(){
        return (
            <div className="modal">
            <section className="modal-main">
                <h1>Crear tarea</h1>
                <div className="inputs">
                    <input type="text" name="taskName" value={this.state.taskName} onChange={this.handleChange} placeholder="Título de la tarea" id=""/>
                </div>
                <div className="buttons-controls">
                    <button className="button-success" onClick={this.handleSubmit}>Guardar</button>
                    <button className="button-warning" onClick={this.closeModal}>Cancelar</button>
                </div>
            </section>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        boardActive: state.boardActiveReducer.board
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTasklist: (tasklist) => dispatch(saveTaskList(tasklist))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NewTask);