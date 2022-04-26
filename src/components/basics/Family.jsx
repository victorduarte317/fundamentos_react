import React, { cloneElement } from 'react'

export default props => {
    return(
        <div>
            
            {props.children.map((child, i) => { 
                return cloneElement(child,{ ...props, key: i})
            })}
        </div>
    ) // since "props.children" is an object containing the children list, the map method maps this list.
      // for each child, receive the index, return the actual child cloned element.
      // with his father element properties - also cloned - and the key with its value being the index.
}