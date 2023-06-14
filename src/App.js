
import React, { useState } from 'react';
import "./App.css"

const App =() =>{
  
  const color = "yellow";
  const name = "I am Yellow";
  const [bg, setBg] = useState(color);
  const [Name, setName] = useState (name);

  const myFunction = () =>{
    let newBg = "purple";
    let newName = "I am Purple";
    setBg(newBg);
    setName(newName);

  }
  const backColor =() =>{
    
    setBg(color);
    setName(name);
  }
  
  return (
    <>
    <div style= {{backgroundColor:bg}}>
    <button onMouseEnter ={myFunction} onMouseLeave={backColor}>{Name}</button>
    </div>
      
    </>
  )

}

export default App
