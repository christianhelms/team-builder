import React from 'react'

export default function TeamMemberCard(props) {
    const clicker = () => {
        props.setUpdate(props.member)
        props.setIsUpdating(true)
    }
    return (
        <div className='card'>
            <p>{props.member.name}</p>
            <p>{props.member.email}</p>
            <p>{props.member.position}</p>
            <button onClick={clicker} >Update</button>
        </div>
    )
}