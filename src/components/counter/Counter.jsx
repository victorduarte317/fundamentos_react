import "./Counter.css";
import React, { Component } from 'react'

class Counter extends Component {
    // Defining components state
    state = {
        number: this.props.initNumber || 0,
        amount: this.props.amount || 5,


    }

    inc = () => { // needs to be an arrow function to fix scope problems around "this" arg
        this.setState({
            number: this.state.number + this.state.amount,
        });
    }

    dec = () => { 
        this.setState({
            number: this.state.number - this.state.amount,
        });
    }

    setAmount = (e) => {
        this.setState({
            amount: +e.target.value // "+" converts the value from string to int
        })
    }
    
    render() {
        return(
            <div className="Counter">
                <h2> Counter </h2>
                <h3>{this.state.number}</h3>
                <div>
                    <label htmlFor="amountInput">Increment/Decrement by: </label>
                    <input id="amountInput" type="number"
                           value={this.state.amount} 
                           onChange={this.setAmount} />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        );
    }
}

export default Counter