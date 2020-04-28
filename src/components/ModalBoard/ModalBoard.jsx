import React, {Component} from 'react';
import './ModalBoard.scss';
import Axios from 'axios';
import { connect } from 'react-redux';
import { saveBoards } from '../../store/actions/boardActions';

class ModalBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            boardName: '',
            backgrounds: null,
            bigImages: null
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3001/background/findall')
            .then(result => {
                this.setState({
                    backgrounds: result.data
                })
            })
    }

    close = () => {
        this.props.handleModal(false);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    selectedImage = (event) => {
        let data = {
            id: event.target.id
        }

        Axios.post('http://localhost:3001/background/findbyid', data)
            .then(result => {
                console.log(result.data.description);
                this.setState({
                    bigImages: result.data.description
                })
            })
    }

    handleSubmit = () => {
        let data = {
            description: this.state.boardName,
            email: this.props.user
        }

        Axios.post('http://localhost:3001/board/create', data)
            .then(result => {
                this.props.boards(result.data.boards);
                this.close();
            })
    }

    render(){
        return (
            <div className="modal">
                <section className="modal-main">
                    <h1>Crear tablero</h1>
                    <div className="inputs">
                        <input type="text" name="boardName" onChange={this.handleChange} value={this.state.boardName} placeholder="Nombre del tablero" id=""/>
                    </div>
                    {this.state.backgrounds === null 
                    ?
                    null
                    :
                    <div className="container-mini-images">
                        <div className="list-images">
                        {this.state.backgrounds.map(background => {
                            return (
                                    <div key={background.id} id={background.id} onClick={this.selectedImage} style={{backgroundImage: `url(/img/background/${background.description}.jpg)`}} className="mini-images">
                                    </div>
                            )
                        })}
                        </div>
                        <div className="big-images" style={{backgroundImage: `url(/img/background/${this.state.bigImages}.jpg)`}}>
                             
                        </div>
                    </div>
                    }
                    <div className="buttons-controls">
                        <button className="button-success"onClick={this.handleSubmit}>Guardar</button>
                        <button className="button-warning" onClick={this.close}>Cancelar</button>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user[1]
    }
}


const mapDispatchToProps = dispatch => {
    return {
        boards: (boards) => dispatch(saveBoards(boards))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ModalBoard);