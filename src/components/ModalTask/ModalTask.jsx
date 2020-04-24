import React, {Component} from 'react';
import './ModalTask.scss';

class Modal extends Component {
    constructor(props){
        super(props);
    }

    close = () => {
        this.props.handleModal(false);
    }

    render(){
        return (
          <div className="modal">
            <section className="modal-main">
             <h1>Modal</h1>
              <button onClick={this.close}>close</button>
            </section>
          </div>
        );
    }
}


export default Modal;