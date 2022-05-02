import React from 'react';

const PeopleList = (props) => {
    const arr = props.contacts
    return (
        <div>
            <ul className='contact-ul'>
                {arr.map((contact, i) => <li key={i}>{contact}</li>)}
            </ul>



        </div>
    )
}

export default PeopleList