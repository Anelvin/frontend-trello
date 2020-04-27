import React, {Component} from 'react';
import './HeaderDashboard.scss';

class HeaderDashboard extends Component {

    render(){
        return (
            <div className="body-header-dashboard">
                <div className="body-left">
                    <span><i className="fab fa-buromobelexperte"></i></span>
                    <span className="img-home"><i className="fas fa-home"></i></span>
                    <p><i className="fab fa-trello"></i>Tableros</p>
                </div>
                <div className="body-center">
                    <img src="../img/trello-logo-white3.svg" alt=""/>
                </div>
                <div className="body-right">
                    <img src="../img/User_icon_2.svg.png" alt=""/>
                </div>
            </div>
        )
    }
}

export default HeaderDashboard;