// Without Using Class structure
// import React from 'react';
// import './HelloWorld.css';


// // Without props
// // const HelloWorld = () => {
// //     return (<div className="HelloWorld">Hello World</div>);
// // };

// // With props
// const HelloWorld = (props) => {
//     return (
//         <div className="HelloWorld">Hello {props.name}!</div>
//     );
// }

// export default HelloWorld;

// Using Class structure
import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {

    constructor(props) {
        super(props);
        this.state = { greeting: 'Hello' };
        this.frenchify = this.frenchify.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    render() {
        return (
            <div className="HelloWorld">
                {this.state.greeting} {this.props.name}!
                <br />
                <button className="frenchify" onClick={this.frenchify}>Frenchify!</button>
                <button className="remove" onClick={this.removeGreeting}>Remove Me!</button>
            </div >
        );
    }

    frenchify() {
        this.setState({ greeting: 'Bonjour' });
    }

    removeGreeting() {
        this.props.removeGreeting(this.props.name);
    }
}

export default HelloWorld;
