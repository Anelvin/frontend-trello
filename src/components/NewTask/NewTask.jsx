import React, {Component} from 'react';
import './NewTask.scss';
import { connect } from 'react-redux';
import Axios from 'axios';

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
            description: this.state.taskName,
            tasklist: this.props.idTaskList,
            board: this.props.boardActive
        }
        Axios.post('http://localhost:3001/task/create', data)
            .then(result => {
                console.log(result);
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

export default connect(mapStateToProps, null) (NewTask);