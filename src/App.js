import React from 'react';
import './App.css';
import Item from './components/Home/Item';
import Counter from './components/Home/Counter';
import FunctionalCounter from './components/Home/FunctionalCounter';
import ContactManager from './components/contactManager/ContactManager';
import Navbar from './components/Home/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AngelaYu from './components/AngelaYu/ToDoList';


function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/counter" element={<Counter />}>
        
        </Route>
        <Route path="/contactManager" element={<ContactManager />}>
        
        </Route>
        <Route path="/toDoList" element={<AngelaYu />}>
        
        </Route>
    </Routes>
  </BrowserRouter>
      <FunctionalCounter />
      <div className='list-item'>
        <Item name='Garri' price='N200' />
      <Item name='Rice' price='N500'/>
      <Item name='Pepper' price='N20'/>
      </div>

      



      
    </div>
  );
}

export default App;
