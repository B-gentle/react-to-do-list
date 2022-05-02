import React, {useState} from 'react';
import contactList from './contactList';
import AddPersonForm from './AddPersonForm';
import PeopleList from './PeopleList';

const ContactManager = (props) => {

    const[contacts, setContacts] = useState(props.contacts)

    const addPerson = (name)=>{
        setContacts([...contacts, name]);
       
    }
    
  return (
    <div>
         <AddPersonForm handleInput={addPerson} />
      <PeopleList contacts={contactList} />
    </div>
  )
}

export default ContactManager