import React from 'react'
import FamilyMember from './FamilyMember'

export default props => {
    return(
        <div>
            <FamilyMember name="Peter " surname={props.surname}/> {/* This will take the surname property of "props" and apply*/}
            <FamilyMember name="Anna " {...props}/> {/* Spread takes all of "props" properties and apply'em*/}
            <FamilyMember name="Gustav " surname="Smith"/> {/* This is a static surname attribution */}
        </div>
    )
}