import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-bar'>
        <h2><Link className='link' to='/'>We Dey Learn</Link></h2>
        <ul>
        <Link className='link' to='counter'><li>Counter</li></Link>
            <Link className='link' to='/contactManager'><li>Contact Manager</li></Link>
            <Link className='link' to='toDoList'><li>To Do List</li></Link>
        </ul>
    </div>
  )
}

export default Navbar