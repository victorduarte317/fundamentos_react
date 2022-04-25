import React from 'react'

export default function Fragment(props) {
// If you want to return the content without a <div> tag wrapping them
    return (
        <>
            <h2>Fragment</h2>
            <p>Warning!</p>
        </>
    ) // that way, the "<>" tag will act as a React.Fragment, returning the content without any tags wrapping them.
      // but, if you want to return a property with the content, you'll need to use:
      // React.Fragment property="x"

}