import React, { useState } from 'react'

export default props => {

    const [value, setValue] = useState('Default')
    function whenChange(e) { // changing the input state
        setValue(e.target.value)
    }

    return (
        <div className='Input'>
            <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    
                <h4>How many numbers?</h4>
                <input value={value} onChange={whenChange} />
            </div>
        </div>
    )
}