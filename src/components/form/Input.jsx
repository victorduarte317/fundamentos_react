import './Input.css'
import React, { useState } from 'react'

export default props => {

    const [value, setValue] = useState('Default')
    function whenChange(e) { // changing the input state
        setValue(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className='Input'>
            <h2>{value}</h2>
            <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    
                <h4>Controlled Component</h4>
                <input value={value} onChange={whenChange} />
                <h4>readOnly Component</h4>
                <input value={value} readOnly />
                <h4>Uncontrolled Component</h4>
                <input value={undefined} />
            </div>
        </div>
    )
}