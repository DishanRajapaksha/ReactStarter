import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';
import './HelloWorldList.css';

class HelloWorldList extends Component {

    constructor(props) {
        super(props);
        this.state = { greetings: ['Methma', 'Samantha'] };
        this.addGreeting = this.addGreeting.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    render() {
        return (
            <div className="HelloWorldList">

                {/* Creating the HelloWorld component */}
                {/*<HelloWorld name="Methma"></HelloWorld>*/}

                <AddGreeter addGreeting={this.addGreeting}></AddGreeter>
                {/* Creating HelloWorld components using renderGreetings function*/}
                {this.renderGreetings()}
            </div>
        );
    }

    renderGreetings() {
        return this.state.greetings.map(name => (
            <HelloWorld key={name} name={name} removeGreeting={this.removeGreeting}></HelloWorld>
        ));
    }

    addGreeting(newName) {
        this.setState({ greetings: [...this.state.greetings, newName] });
    }

    removeGreeting(removeName) {
        const filteredGreetings = this.state.greetings.filter(name => {
            return name != removeName;
        });
        this.setState({ greetings: filteredGreetings });
    }
}

export default HelloWorldList;