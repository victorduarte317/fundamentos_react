import React from 'react'
import students from '../../../data/students'

export default props => {
    // data to display
    const studentsList = students.map((student)=>{
        return (
            <li key={student.id}>
                {student.id}) {student.name} = {student.grade}
            </li>
        )
    })
    // screen display
    return(
        <div>
            <ul style={ {listStyle: 'none'} }>
                {studentsList}
            </ul>
        </div>
    ) // Returning the JS to JSX converted array. 
}