import React, { Component } from 'react';
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
} from 'react-modal-bootstrap';


export default class ModalSaveDesign extends Component {

    constructor(props) {
        super(props);
        this.state = {isOpen: false};

        this.name = JSON.stringify(props);
        this.updateState = this.updateState.bind(this);
        }

    openModal = () => {
        this.setState({
            isOpen: true
        });
    };

    hideModal = () => {
        this.setState({
            isOpen: false
        });
    };

    updateState() {
       if(this.state.isOpen)
       {
           this.openModal();
       }
       else {
           this.hideModal();
       }
    }

    render(){

        return (<Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
            <ModalHeader>
                <ModalClose onClick={this.hideModal}/>
                <ModalTitle>Modal title</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <p>zmienne w props</p>
                <p>{this.name}</p>
                <p>state w </p>
                <p>{JSON.stringify(this.state)}</p>
            </ModalBody>
            <ModalFooter>
                <button className='btn btn-default' onClick={this.hideModal}>
                    Close
                </button>
                <button className='btn btn-primary'>
                    ZAPISZ
                </button>
            </ModalFooter >
        </Modal>)
    }
}