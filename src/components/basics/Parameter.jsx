import React from 'react'

export default function Parameter(props) { // receiving props (properties) from <Parameter> on App.jsx
    const status = props.grade >= 7 ? 'passed the test' : 'failed the test'
    // props.grade = Math.ceil(props.grade) wont work, cause props.grade is a read only property.
    // the right way to do something like that would be:
    // const gradesInt = Math.ceil(props.grade), returning gradesInt instead of props.grade.
    return (
        <div>
            <h2>{ props.title }</h2>
            <p>
                <strong>{ props.student } </strong> 
                grade is 
                <strong> { props.grade } </strong>
                and he/she/they 
                <strong> {status} </strong>
            </p>
        </div>
    )
}