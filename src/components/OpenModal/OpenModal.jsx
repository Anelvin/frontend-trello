import React, { Component } from "react";
import Modal from '../ModalTask/ModalTask';

class OpenModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalShow: false
        }
    }

    handleModal = () => {
        this.setState({
            modalShow: !this.state.modalShow
        })
    }
  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <button onClick={this.handleModal}>
          open
        </button>
        {this.state.modalShow === true ? <Modal handleModal={this.handleModal}/> : null}
      </main>
    );
  }
}
export default OpenModal;