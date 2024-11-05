import React, { useRef } from 'react'

export default function UseRefHook() {

  const disp = useRef(null);
  const inp = useRef();
  const arr = useRef([]);

  function handleSubmit(){
    console.log(disp.current);

    disp.current.innerHTML = inp.current.value;
    disp.current.style.background = "#"+Math.random().toString(16).substr(-6);
    disp.current.style.color = "#"+Math.random().toString(16).substr(-6);
    
    arr.current.push(inp.current.value);
  } 

  return (
    <div>
      
        <h1>useRef Demo</h1>
        <input type="text" ref={inp} name="" id="" />
        <button onClick={handleSubmit}>Submit</button>
        <h1 ref={disp}></h1>

        <ol>
          {
            arr.current.map((item, index)=>{
              return(
                <li key={index}>{item}</li>
              )
            })
          }
        </ol>
    </div>
  )
}
