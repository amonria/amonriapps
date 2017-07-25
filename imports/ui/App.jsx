import React, { Component } from 'react';

import Task from './Task.jsx'
import PopUps from './PopUps'
import ModalSaveDesign from './modals/ModalSaveDesign'

// App component - represents the whole app
export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        };

        this.updateState = this.updateState.bind(this);

    };

    getTasks() {
        return [
            { _id: 1, text: 'This is task 1' },
            { _id: 2, text: 'This is task 2' },
            { _id: 3, text: 'This is task 3' },
        ];
    }

    renderTasks() {
        return this.getTasks().map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    updateState(st) {
        this.setState({data: st})
    }

    showModal(){
        this.ModalSaveDesign.openModal();
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
                <div>
                    <button onClick = {()=>this.updateState("1")}>STATE 1</button>
                    <button onClick = {()=>this.updateState("2")}>STATE 2</button>
                    <button onClick = {this.showModal}>POKAZ POPUP</button>
                    <h4>{this.state.data}</h4>
                    <PopUps/>
                </div>
            </div>
        );
    }

}


