import { useState } from 'react'

import './App.css'
import Header from './Components/header/Header'
import Bottles from './Components/bottles/Bottles'
// import Counter from './Counter';
// import User from './User';

function App() {

  // function handleClick(){
  //   console.log("clicked the button");
  //   alert('button clicked')
  // }

  // function addToFour (num){
  //   console.log(num + 5);
  // }


  return (
    <>
    <Header></Header>
    <Bottles></Bottles>
 
      {/* <h1>Vite + React</h1>
      <Counter></Counter>
      <User></User>
      <button onClick={handleClick}>Click me</button>
     
      <button onClick={() => addToFour(4)}>Click me</button> */}
     
    </>
  )
}

export default App
