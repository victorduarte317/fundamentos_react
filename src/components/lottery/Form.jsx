import React from 'react'

export default props => {
    return(
        <div>
            <label htmlFor="amountInput ">How many numbers</label>
                <input 
                    id ="amountInput" 
                    type="number"
                    min="6"
                    max="15"
                    value={props.amount} // props.amount (this.state.amount) is already receiving the user inputted value, it needs to be called in the random number generator to set how many numbers will be generated.
                    onChange={e => props.setAmount(+e.target.value)}
                />
        </div>
    )

}
