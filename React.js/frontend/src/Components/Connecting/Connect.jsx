import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap'
const Connect = () => {

  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [image, setImage] = useState(null);


  const formData = new FormData();
  formData.append("Title", title)
  formData.append("SubTitle", subtitle)
  formData.append("img", image)


  function handleCreate(e) {
    e.preventDefault();

    axios.post('http://localhost:2300/file/postdata', formData)
      .then(() => {
        alert("created");
        setSubTitle("")
        setTitle("")
        setImage(null)
      })
      .catch(error => { console.log(error); })
  }

  /* get */

  const [views, setViews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2300/file/getdata')
      .then((res) => {
        setViews(res.data)
      })
      .catch(error => { console.log(error); })

  })

  /* set edit */
  const [edit,setEdit] = useState(false);
  function setupEdit(){
    const id = localStorage.getItem("id");

    axios.get(`http://localhost:2300/file/getdata/${id}`)
    .then((res)=>{
      setTitle(res.data.Title);
      setSubTitle(res.data.SubTitle);

      setEdit(true)
    })
  }

  /* update */

  function handleUpdate(e){
    e.preventDefault();
    const id = localStorage.getItem("id");
    axios.put(`http://localhost:2300/file/update/${id}`,formData)
    .then(() => {
      alert("updated");
      setSubTitle("")
      setTitle("")
      setImage(null)

      setEdit(false);
      localStorage.clear();
    })
    .catch(error => { console.log(error); })
  }
  /* delete */
  function handleDelete(id) {
    axios.delete(`http://localhost:2300/file/delete/${id}`)
      .catch(error => { console.log(error); })

  }
  return (
    <div className='mt-5'>
      <form action="" className='card w-50 p-3 mx-auto'
        onSubmit={
          edit?
          handleUpdate:
          handleCreate
        }
      >
        <label htmlFor="" className="form-label">Title</label>
        <input type="text" name="" value={title} onChange={(e) => setTitle(e.target.value)} id="" className="form-control" />


        <label htmlFor="" className="form-label">Sub Title</label>
        <input type="text" value={subtitle} onChange={(e) => setSubTitle(e.target.value)} name="" id="" className="form-control" />


        <label htmlFor="" className="form-label">File</label>
        <input type="file" name="" onChange={(e) => setImage(e.target.files[0])} id="" className="form-control" />

        <button className="btn btn-primary mt-2">

          {
            edit?
            "update":
            "create"
          }
        </button>
      </form>
      <br />


      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Title</th>
            <th scope="col">Subtitle</th>
            <th scope="col">Pic</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {
            views.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.Title}</td>
                  <td>{item.SubTitle}</td>
                  <td>
                    <img src={`http://localhost:2300/file/files/${item.Fname}`} alt="" width={100} />
                  </td>

                  <td>
                    <button className="btn btn-dark"
                      onClick={()=>{
                        localStorage.setItem("id",item._id);
                        setupEdit()
                      }}
                    >Edit</button>
                    <button className="btn btn-danger"
                      onClick={() => {
                        handleDelete(item._id)
                      }}
                    >Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <Carousel>
        {
          views.map((item) => {
            return (
              <Carousel.Item>
                <img src={`http://localhost:2300/file/files/${item.Fname}`} alt="" className='img-fluid' />
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Connect