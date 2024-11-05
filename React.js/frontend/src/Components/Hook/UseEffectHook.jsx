import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {

  const [sname,setSname] = useState("");
  const [sbp,setSbp] = useState("");
  
  async function sendData(e) {
    e.preventDefault();
    const dataObj = {
      Name: sname,
      BirthPlace: sbp
    }

    console.log(dataObj);
    try {

      await fetch('https://66a1f78a967c89168f1e3a87.mockapi.io/Users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObj)
      })
        .then(() => {
          alert("Data sent");
        })
    }
    catch (error) {
      console.log(error);
    }
    finally {
      console.log('Operation Success');
    }

  }

  const [view,setView] = useState([]);
  useEffect(()=>{
    fetch('https://66a1f78a967c89168f1e3a87.mockapi.io/Users')
    .then((res)=>{return res.json()})
    .then((data)=>setView(data))
    .catch(err=>{console.log(err);
    })
  },[view])
  console.log(view);
  

  return (
    <div>
      <form class="row g-2" onSubmit={sendData}>
        <div class="col-sm-12 col-md-6">
          <label for class="form-label">Name</label>
          <input type="text" id="name" onChange={(e)=>{setSname(e.target.value)}} class="form-control" />
        </div>
        
        <div class="col-sm-12 col-md-6">
          <label for class="form-label">Birthplace</label>
          <input type="text" id="birth" class="form-control" onChange={(e)=>{setSbp(e.target.value)}} />
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>

      <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Birthplace</th>
                </tr>
            </thead>
            <tbody id="display">
              {
                view.map((item,index)=>{
                  return(
                    <tr key={index}>
                      <td>{item.Name}</td>
                      <td>{item.BirthPlace}</td>
                    </tr>
                  )
                })
              }
            </tbody>
        </table>
    </div>
  )
}
