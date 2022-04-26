import React from 'react'

export default props => {
    const cb = props.onTheClick // callback
    return (
        <div>
            <div>Child</div>
            <button onClick={_ => cb('James', 56, true)}>
                Send infos to Parent
            </button>
        </div>
    )
}