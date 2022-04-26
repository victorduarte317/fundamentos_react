import React from 'react'
import DirectChild from './DirectChild'
// One of the aspects of the direct communication between parent elements
// is that, usually, the parent element imports his child element.

// Direct communication between parent occurs when
// the parent element passes a given property through props to his child element.

export default props => {
    return (
        <div>
            <DirectChild
                name='Jeff'
                age={20}
                nerd={true}
            />

            <DirectChild
                name='Chad'
                age={16}
                nerd={false}
            />

        </div>
    )
}