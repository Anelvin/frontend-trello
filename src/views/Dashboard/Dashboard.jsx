import React, {Component} from 'react';
import './Dashboard.scss';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import MiniBoard from '../../components/MiniBoard/MiniBoard';
import { connect } from 'react-redux';
import ModalBoard from '../../components/ModalBoard/ModalBoard';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalShow: true,
            user:''
        }
    }

    componentDidMount(){
        this.setState({
            user: this.props.match.params.user
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
        dashboars: state.columnsReducer.columns
    }
}

export default connect(mapStateToProps, null)(Dashboard);