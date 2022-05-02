import React, { useState } from 'react';
import './item.css';

const Item = () => {
 const [item, setItem] = useState("");

  const placeItem = (e) =>{
    setItem(e.target.value)
  }
  return (
    <div className='box'>
<input type='text' value={item} onChange={placeItem} />
<b>Item: {item}</b>
    </div>
  )
}

export default Item
