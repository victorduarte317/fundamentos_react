import "./Counter.css";
import React, { Component } from 'react'

import Display from "./Display";
import Buttons from "./Buttons";
import AmountForm from "./AmountForm";

class Counter extends Component {
    // Defining components state
    state = {
        number: this.props.initNumber || 0,
        amount: this.props.amount || 1,
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

    setAmount = (newAmount) => {
        this.setState({
            amount: newAmount 
        })
    }
    
    render() {
        return(
            <div className="Counter">
                <h2> Counter </h2>
                <Display number={this.state.number} />
                <AmountForm amount={this.state.amount} setAmount={this.setAmount} />
                <Buttons setInc={this.inc} setDec={this.dec} />
            </div>
        );
    }
}

export default Counter