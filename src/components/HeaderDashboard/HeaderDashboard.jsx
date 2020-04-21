import React, {Component} from 'react';
import './HeaderDashboard.scss';

class HeaderDashboard extends Component {

    render(){
        return (
            <div className="body-header-dashboard">
                <div className="body-left">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="body-center">
                    <img src="./img/trello-logo-white3.svg" alt=""/>
                </div>
                <div className="body-right">
                    <img src="./img/User_icon_2.svg.png" alt=""/>
                </div>
            </div>
        )
    }
}

export default HeaderDashboard;