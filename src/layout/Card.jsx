import './Card.css'
import React from 'react'

export default props => {

    const cardStyle = {
        backgroundColor: props.color || '#F00', // If style doesnt receive any value, then its default color is red.
        borderColor: props.color || '#F00'
    }

    return (
        <div className ='Card' style={cardStyle}>
            <div className='Title'>{ props.title }</div>
            <div className='Content'>
                {props.children} 
            </div> 
        </div>
    ) // using the "children" property to gain access to props children elements. In this case, the <Random> and its properties.
}