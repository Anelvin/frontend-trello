import React, {Component} from 'react';
import './ModalDescriptionTask.scss';
import Axios from 'axios';
import { connect } from 'react-redux';

class ModalDescriptionTask extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: '',
          description: ''
        }
    }
    
    close = () => {
        this.props.handleModal(false);
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    componentDidMount() {
      let data = {
        id: this.props.taskActive
      }
      Axios.post('http://localhost:3001/task/findbyid', data)
        .then(result => {
          console.log(result);
          this.setState({
            name: result.data.name
          })
        })
    }

    render(){
        return (
          <div className="modal">
            <section className="modal-main">
            <input type="text" name="name" onChange={this.handleChange} value={this.state.name} id=""/>
            <textarea name="description" onChange={this.handleChange} placeholder="Descripción de la tarea" id="" cols="60" rows="10"></textarea>
            <div>
              <button>Guardar</button>
              <button>Cancelar</button>
            </div>
            <button onClick={this.close}>close</button>
            </section>
          </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    taskActive: state.taskActiveReducer.task
  }
}

export default connect(mapStateToProps, null) (ModalDescriptionTask);