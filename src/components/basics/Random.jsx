import React from 'react'

export default (props)=> {
    const { min, max } = props; // destructuring. On the left side we have the destructuring operators, the ones that will receive the value of the object on the right.

    const random = parseInt(Math.random() * (max - min)) + min; 
    return(
        <div>
            <h2> Random value </h2>
            <p>
                <strong>Min value:</strong> {min}
            </p>

            <p>
                <strong>Max value:</strong> {max}
            </p>

            <p>
                <strong>Random value</strong> {random}
            </p>
        </div>
    )
}