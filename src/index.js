import './index.css'
import ReactDOM from 'react-dom' 
import React from 'react'

import App from './App'

ReactDOM.render(
    // JSX is the capability that you have to work with html-like code inserted into a javascript context
    // using {} to interpretate the const (tag) value.
    // using the component via JSX
    // since the function was exported via "export default", the variable that will receive the function can have any name.

    // If you're going to return two or more elements, you need to have them wrapped in an enclosing tag. 
    // In this case, the div tag is wrapping the adjacent JSX elements.
    
    <App />,
    document.getElementById('root')
)  