import React from 'react'

export default props => {
    const cb = props.onTheClick // callback
    const genRandomAge = () => parseInt(Math.random() * (20)) + 50
    const genRandomMarriage = () => Math.random() > 0.5
    return (
        <div>
            <div>Child</div>
            <button onClick={_ => cb('James', genRandomAge(), genRandomMarriage())}>
                Send infos to Parent
            </button>
        </div>
    )
}