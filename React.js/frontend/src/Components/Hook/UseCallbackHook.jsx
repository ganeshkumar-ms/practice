import React, { useCallback, useRef, useState } from 'react'

export default function UseCallbackHook() {

  const [color,setColor] = useState("");
  const disp = useRef();

  const handleClick = useCallback(()=>{
    disp.current.style.background = color;
  },[color]);

  return (
    <div ref={disp}>
        <label htmlFor="">Enter a color name</label>
        <input type="text" name="" id="" onChange={(e)=>{setColor(e.target.value)}} />
        <button onClick={handleClick}>change color</button>
    </div>
  )
}
