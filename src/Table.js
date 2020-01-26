import React, { Component } from 'react';
import Modal from './Model';
import Login from './Login'



class Table extends Component {

    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render () {
        return (
            <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                <button className="open-modal-btn" onClick={this.openModalHandler}>Login </button>

                <Modal className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                      <Login></Login>
                </Modal>

                
            </div>
        );
    }
}

export default Table;
