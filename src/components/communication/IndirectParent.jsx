import React, { useState } from 'react'
import IndirectChild from './IndirectChild'

export default props => {
    // destructure, left-sided element is the property, right-sided element is a function
    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [married, setMarriageStatus] = useState(false)

    function provideInfos(name, age, married) {
        setName(name)
        setAge(age)
        setMarriageStatus(married)
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{age} </strong></span>
                <span>{married ? 'Married' : 'Divorced'}</span>
            </div>
            <IndirectChild onTheClick={provideInfos}></IndirectChild>
        </div>
    )
}