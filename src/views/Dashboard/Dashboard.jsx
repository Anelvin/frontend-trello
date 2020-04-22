import React, {Component} from 'react';
import './Dashboard.scss';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import MiniBoard from '../../components/MiniBoard/MiniBoard';
import { connect } from 'react-redux';
import ModalBoard from '../../components/ModalBoard/ModalBoard';
import { saveBoards } from '../../store/actions/boardActions';
import Axios from 'axios';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalShow: false,
            user:''
        }
    }

    componentDidMount(){
        this.setState({
            user: this.props.match.params.user
        })
        let data = {
            email: this.props.user
        }
        Axios.post('http://localhost:3001/userboard/findbyuser', data)
            .then(result => {
                console.log(result);
                this.props.saveBoards(result.data);
            })
        
    }
 
    handleModal = () => {
        this.setState({
            modalShow: !this.state.modalShow
        })
    }

    render(){
        return (
            <div>
                <HeaderDashboard />
                <div className="body-dashboard">
                    <div className="sidebar">
                        <h3 onClick={this.handleModal}>Tableros</h3>
                        <h3>Plantillas</h3>
                        <h3>Inicio</h3>
                    </div>
                    {this.state.modalShow === true 
                    ?
                    <ModalBoard handleModal={this.handleModal}  user={this.state.user}/>
                    :
                    null 
                    }
                    <div className="list-boards">
                        <h3>Tableros personales</h3>
                        <div>
                            {this.props.dashboars.map(board => (
                                <MiniBoard name={board.name} id={board.index}/>
                            )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dashboars: state.boardReducer.boards,
        user: state.userReducer.user[1]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveBoards: (boards) => dispatch(saveBoards(boards))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);