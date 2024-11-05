import React, { useReducer } from 'react'

export default function UseReducerHook() {

  const data = {
    Name:"",
    Email:"",
    Phone:"",
    Age: 0
  }

  const [state,dispatch] = useReducer(reducer, data);

  function reducer(ins,outs){
    if(outs.type === "cgtext"){
      return{
        ...ins,
        [outs.field]:outs.payload
      }
      
    }
    else if(outs.type === 'incage'){
      return{
        ...ins,
        Age:ins.Age+1
      }
    }
    else if(outs.type === 'decage'){
      return{
        ...ins,
        Age:ins.Age-1
      }
    }
    else{
      return false
    }
  }

  function handleChange(e){
    const {name,value} = e.target;

    dispatch({
      type:"cgtext",
      field:name,
      payload:value
    })
  }
  return (
    <div>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="Name"
        value={state.Name}
        onChange={handleChange}
        id=""
      /> <br /><br />
      <label htmlFor="">Phone</label>
      <input
        type="text"
        name="Phone"
        value={state.Phone}
        onChange={handleChange}
        id=""
      /> <br /><br />
      <label htmlFor="">Email</label>
      <input
        type="text"
        name="Email"
        value={state.Email}
        onChange={handleChange}
        id=""
      /> <br /><br />
      <label htmlFor="">Age</label>
      <button
        onClick={()=>{
          dispatch({
            type:'decage'
          })
        }}
      >-</button>
      <button
        onClick={()=>{
          dispatch({
            type:'incage'
          })
        }}
      >+</button>

      <h1>
        Name : {state.Name} <br />
        Phone : {state.Phone} <br />
        Email : {state.Email} <br />
        Age : {state.Age}
      </h1>
    </div>
  )
}
