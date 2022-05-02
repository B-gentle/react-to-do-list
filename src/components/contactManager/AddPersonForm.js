import React, {useState} from 'react';

const AddPersonForm = (props) => {

    const [person, setPerson] = useState('');

    const handleChange = (e)=>{
        setPerson(e.target.value)
    }

    const handleSubmit = (e)=>{
        props.handleInput(person);
        setPerson('')
e.preventDefault();
    }

  return (
    <form className='add-person-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Add New Contact' onChange={handleChange} value={person} />
        <button type='submit'>Add</button>
    </form>
  )
}

export default AddPersonForm