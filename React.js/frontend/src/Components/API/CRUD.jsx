import React, { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
const API = "https://66a1f78a967c89168f1e3a87.mockapi.io/AXIOS"
export const CRUD = () => {

  const [data, setData] = useState({
    Name: "",
    Email: "",
    Phone: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }))
  }

  // to post a data
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(API, data)
      .then(() => {
        alert("Data Created");
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      })
  }

  //to get data
  const [view, setView] = useState([]);

  useEffect(() => {
    axios.get(API)
      .then((res) => {
        setView(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  })

  //setup edit
  const [edit, setEdit] = useState(false);

  function setupEdit() {
    const id = localStorage.getItem("_id");

    axios.get(`${API}/${id}`)
      .then((res) => {
        setData({
          Name: res.data.Name,
          Email: res.data.Email,
          Phone: res.data.Phone
        })

        setEdit(true);
      })
      .catch(err => { console.log(err); })

  }

  // to update a data 

  function handleUpdate(e) {
    e.preventDefault()
    const id = localStorage.getItem("_id");
    axios.put(`${API}/${id}`, data)
      .then(() => {
        alert("Data Updated");
        setEdit(false);
        localStorage.clear();
        window.location.reload()
      })
      .catch(err => { console.log(err); })
  }

  // delete a data

  const handleDelete = (id) =>{
    axios.delete(`${API}/${id}`)
    .then(()=>{
      alert("Data Deleted");
      window.location.reload();
    })
    .catch(err => { console.log(err); })
  }
  return (
    <div>
      <form onSubmit={
        edit?
        handleUpdate:
        handleSubmit
      }>
        <label htmlFor="">Name</label>
        <input type="text" name="Name" onChange={handleChange} value={data.Name} id="" />
        <label htmlFor="">Email</label>
        <input type="text" name="Email" id="" value={data.Email} onChange={handleChange} />
        <label htmlFor="">Phone</label>
        <input type="text" name="Phone" id="" value={data.Phone} onChange={handleChange} />

        <button type="submit">
          {
            edit?
            "Update data":
            "Create data"
          }
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>EMail</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            view.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.Name}</td>
                  <td>{item.Email}</td>
                  <td>{item.Phone}</td>
                  <td>
                    <button
                      onClick={()=>{
                        localStorage.setItem("_id",item.id);
                        setupEdit();
                      }}
                    >Edit</button>
                    <button
                      onClick={()=>{
                        handleDelete(item.id)
                      }}
                    >Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
