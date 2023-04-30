import './App.css';
import Add from './Add';
import { useState } from 'react';
function App() {

  const [Item, setItem]=useState("");
  const [Items, setArray]=useState([]);

  
  const inputdeal=(event)=>{
      setItem(event.target.value);
  }
  const add=(event)=>{
     setArray((oldItems)=>{
      return [...oldItems,Item];
     });
     setItem("");
  };

  const deleteItems=(id)=>{
    console.log();
    setArray((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !==id;
      });
    });
  };
   
  return (
    <div className='Main'>
      {/* <h1>To Do List</h1> */}
    <div className="App">
    <h1>To Do List</h1>
        <div className='add'>
         <input type="text" onChange={inputdeal} value={Item} placeholder='Add Task'/>
         <button className='mainbtn' onClick={add}>+</button>
         </div>
         <  div className="list"> 

{/* map function will render whole array elements one by one,index will tell which button user press */}
            {Items.map((itemval,index)=>{
              return  <Add 
              key={index}
              id={index}
              text={itemval}
              onSelect={deleteItems}
              />}
            )}
        </div>
    </div>
    </div>
  );
}

export default App;
