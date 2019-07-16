import React, { useState, useEffect } from 'react'
// Id Generator
let idCounter = () => {
    let id = 0;
    return function countUp() {
        return id++
    }
}
const idUp = idCounter();

export default function Form(props) {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        position: ''
    })

    useEffect( () => {
        setFormState(props.update)
    }, [props.update])

    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        if (!props.isUpdating){
        props.setMembers([...props.members, {...formState, id: idUp()}])
        props.setIsUpdating(false)
        setFormState({
            name: '',
            email: '',
            position: ''
        })
    } else if (props.isUpdating) {
        const updatedList = props.members.filter(member => member.id !== formState.id)
        updatedList.push(formState)
        props.setMembers(updatedList)
    }
    }
    return (
        <div className='form'>
            <form onSubmit={submitHandler}>
                <input type='text' placeholder='Name' name='name' value={formState.name} onChange={changeHandler} />
                <input type='email' placeholder='E-mail' name='email' value={formState.email} onChange={changeHandler} />
                <input type='text' placeholder='Position' name='position' value={formState.position} onChange={changeHandler} />
                <button type='submit'>{props.isUpdating ? 'Update Team Member' : 'Add To Team'}</button>
            </form>
        </div>
    )
}

