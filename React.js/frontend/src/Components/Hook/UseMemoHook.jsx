import React, { useMemo, useState } from 'react'

export default function UseMemoHook() {

  const [number,setNumber] = useState(0);

  const loop = useMemo(()=>{
    let crr=0;
    for(let i=0;i<number;i++){
      crr += i;
    }
    return crr;
  },[number])
  return (
    <div>
      <label htmlFor="">Enater a number</label>
      <input type="number" name="" onChange={(e)=>{setNumber(e.target.value)}} id="" />

      <h1>
        num : {number} <br />
        loop : {loop}
      </h1>
    </div>
  )
}
