import React from 'react'

export default function ChildProp(prop) {
  const tour = prop.trip;
  return (
    <div>
      <h1>Child File</h1>
      <ul>
        {
          tour.map((item)=>{
            return(
              <li>{item}</li>
            )
          })
        }
      </ul>

      <Disp2 tour1={tour} />
    </div>
  )
}


function Disp2(ganesh){
  const tour2 = ganesh.tour1;
  return(
    <div>
      <h1>Child 2 File</h1>
      <ol>
      {
          tour2.map((item)=>{
            return(
              <li>{item}</li>
            )
          })
        }
      </ol>
    </div>
  )
}