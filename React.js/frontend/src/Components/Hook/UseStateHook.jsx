import React, { useState } from 'react'

export default function UseStateHook() {
  /* 
    syntax:
    const [VAR1,VAR2] = useState(inital value);
    VAR1 = stores updated inital value
    VAR2 = helps to update initial value
  */

  const [state, setState] = useState(0);
  const [text,setText] = useState("")

  function updateState(){
    setState(2)
  }
  return (
    <div>
      <h1>useState Hook Example</h1>
      <button onClick={()=>{
        setState(1)
      }}>State 1</button>
      <button onClick={updateState}>State 2</button>
      <input type="text" name="" onChange={(e)=>{setText(e.target.value)}} id="" />

      <DispResult result={state} texts={text} />
    </div>
  )
}

function DispResult(prop) {
  // console.log(prop.result);
  

  if (prop.result === 1) {
    return (
      <div>
        <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" width={300} alt="" />
        <h1>type :{prop.texts}</h1>
        </div>
    )
  }

  if(prop.result === 2 ){
    return (
      <div>
        <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width={300} alt="" />

        <h1>result :{prop.texts}</h1>
      </div>
    ) 
  } 
}