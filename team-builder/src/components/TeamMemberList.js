import React from 'react'
import TeamMemberCard from './TeamMemberCard'

export default function TeamMemberList(props) {
    return (
        <div>
            {props.members.map(member => <TeamMemberCard member={member} setUpdate={props.setUpdate} setIsUpdating={props.setIsUpdating} />)}
        </div>
    )
}