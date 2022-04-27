import React from 'react'

export default props => {
    return (
        <div>
            <label htmlFor="amountInput">Increment/Decrement by: </label>
            <input 
                id="amountInput" type="number"
                value={props.amount} 
                onChange={e => props.setAmount(+e.target.value)} 
            />
        </div>
    )
}