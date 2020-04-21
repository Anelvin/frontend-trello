import React, {Component} from 'react';
import './MiniBoard.scss';

class MiniBoard extends Component {

    render(){
        return(
            <div className="body-mini-board">
                {this.props.name}
            </div>
        )
    }
}

export default MiniBoard;