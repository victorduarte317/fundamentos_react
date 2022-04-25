import React from 'react'
import Family from './Family'

export default props => {
    return(
        <div>{props.name}<strong>{props.surname}</strong></div>
    )
}