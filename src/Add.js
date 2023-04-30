import React from 'react'
import './Add.css';
const Add=(props)=>{
  return <li><button className='btn' onClick={()=>{props.onSelect(props.id);
  }}>-</button>{props.text} </li>
}
export default Add