import React, {Component} from 'react';
import './Dashboard.scss';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import MiniBoard from '../../components/MiniBoard/MiniBoard';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    handleParams = () => {
        console.log(this.props.match.params.user);
    }

    render(){
        return (
            <div>
                <HeaderDashboard />
                <div className="body-dashboard">
                    <div className="sidebar">
                        <h3>Tableros</h3>
                        <h3>Plantillas</h3>
                        <h3>Inicio</h3>
                    </div>
                    <div className="list-boards">
                        <h3>Tableros personales</h3>
                        <div>
                            {this.props.dashboars.map(board => (
                                <MiniBoard name={board.name}/>
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