import React, { Component } from 'react';
import './counter.css';
// import Converter from '../contactManager/AddPersonForm';

export default class Counter extends Component {

    state = {
        counter: 0
    }

    increment = ()=>{
      this.setState({
        counter: this.state.counter+1
        
      });
    }

    decrement =()=>{
      this.setState({
        counter: this.state.counter-1
      });
    }

    reset = ()=>{
      this.setState({
        counter: 0
      })
    }

    
  render() {
    return (
      <div>
        <h3> {this.state.counter}</h3>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.reset}>Reset</button>
      <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
