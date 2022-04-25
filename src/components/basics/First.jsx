import React from 'react'

export default function First() { // exporting as default, the function can even be anonymous, it will still work
    const msg = 'Check your grades'
    return (
        <div>
            <h2> Chemistry class </h2>
            <p> { msg } </p>
        </div>
    ) // when using a JSX structure like this, it will usually be returned inside an expression for indentationary reasons.
}