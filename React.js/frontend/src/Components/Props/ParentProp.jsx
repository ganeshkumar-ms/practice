import React from 'react'
import ChildProp from './ChildProp';

export default function ParentProp() {

  const tourist = ["Yercaud","Dolphin Nose","Valluvar Kottam","Valpaarai","Kovaikutralam"];
  return (
    <div>
      <h1>Parent File</h1>
      <ol>
        {
          tourist.map((item)=>{
            return(
              <li>{item}</li>
            )
          })
        }
      </ol>

      <ChildProp trip={tourist} />
    </div>
  )
}
