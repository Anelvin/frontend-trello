import React, {Component} from 'react';
import './MiniBoard.scss';

class MiniBoard extends Component {
    constructor(props){
        super(props);
    }

    handleKey = () => {
        this.props.openBoard(this.props.id);
    }

    render(){
        return(
            <div className="body-mini-board" onClick={this.handleKey} style={{backgroundImage:"url(/img/background/"+this.props.background+".jpg)"}}>
                {this.props.name}
            </div>
        )
    }
}

export default MiniBoard;