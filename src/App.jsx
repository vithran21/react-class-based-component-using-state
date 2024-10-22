import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    console.log('hello');

    this.state = {
      count: 0,
      bg: 'yellow', // Initial background color
    };
  }

  onIncrement = () => {
    this.setState(
      (prevState) => ({ count: prevState.count + 1 }),
      this.handleBg // Invoke handleBg after state update
    );
  };

  onDecrement = () => {
    this.setState(
      (prevState) => ({ count: prevState.count - 1 }),
      this.handleBg // Invoke handleBg after state update
    );
  };

  handleBg = () => {
    let newBg;
    if (this.state.count > 0 && this.state.count <= 5) {
      newBg = 'red';
    } else if (this.state.count > 5 && this.state.count <= 10) {
      newBg = 'blue';
    } else if (this.state.count > 10) {
      newBg = 'green';
    } else {
      newBg = 'yellow';
    }
    this.setState({ bg: newBg });
  };

  render() {
    const divStyle = {
      backgroundColor: this.state.bg, // Dynamically set background from state
      backgroundSize: 'cover',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
    };

    return (
      <div style={divStyle}>
        <h1>{this.state.count}</h1>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
      </div>
    );
  }
}
