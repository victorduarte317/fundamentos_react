import React from 'react'
import IndirectChild from './IndirectChild'

export default props => {
    // Name, Age, Married are the infos that the parent needs to get via his child element.
    // To do so, since the parent has the direct connection with his child element
    // He will pass a callback function - a function that will be called back when an event occurs.
    // In this case, when the button "onTheClick" event triggers, the callback function will trigger as well
    // passing all the information on the child element to its parent.

    function provideInfos(name, age, married) {
        console.log(name, age, married)
    }

    return (
        <div>
            Parent

            <IndirectChild onTheClick={provideInfos}></IndirectChild>
        </div>
    )
}