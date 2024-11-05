import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function CreateProduct() {
  const navigate = useNavigate()

async function handleSubmit(event){
    event.preventDefault()

    const formData = new FormData(event.target)
    const product = Object.fromEntries(formData.entries())

    if (!product.name || !product.brand || !product.category || !product.price || !product.description || !product.image.name) {
      alert("Please fill all the fields!")
      return
     }
    try{
      const response= await fetch("http://localhost:4000/products",{
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if(response.ok){
        navigate("/admin/products")

      }else if(response.status === 400){
        alert("Validation Errors")
      }
      else{
        alert("Unable to create the product!")
      }
    }catch(error){
      alert("Unable to connect to the server")

    }
   
}
  return (
    <div className='container my-4'>
     <div className="row">
      <div className="col-md-8 mx-auto rounded border p-4">
        <h2 className='text-center mb-5'>Create Product</h2>



        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <label htmlFor="" className="col-sm-4 col-form-label">Name</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="product.name"/>
              <span className="text-danger"></span>
            </div>
            </div>

            
          <div className="row mb-3">
            <label htmlFor="" className="col-sm-4 col-form-label">Brand</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="product.brand"/>
              <span className="text-danger"></span>
            </div>
          </div>

            
          <div className="row mb-3">
            <label htmlFor="" className="col-sm-4 col-form-label">Category</label>
            <div className="col-sm-8">
              <select  id="" className="form-select" name="product.category">
              <option value="Other" >Other</option>
              <option value="Phones" >Phones</option>
              <option value="Computers" >Computers</option>
              <option value="Accesories" >Accesories</option>
              <option value="Printers" >Printers</option>
              <option value="Cameras" >Cameras</option>
         </select>
              <span className="text-danger"></span>
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="" className="col-sm-4 col-form-label">Price</label>
            <div className="col-sm-8">
              <input type="number" className="form-control" name="product.price" step="0.01" min="1"/>
              <span className="text-danger"></span>
            </div>
          </div>


          <div className="row mb-3">
            <label htmlFor="" className="col-sm-4 col-form-label">Description</label>
            <div className="col-sm-8">
              <textarea row="4" className="form-control" name="product.description" />
              <span className="text-danger"></span>
            </div>
          </div>


          <div className="row mb-3">
            <label htmlFor="" className="col-sm-4 col-form-label">Image</label>
            <div className="col-sm-8">
              <input className="form-control" name="product.image.name" type="file" />
              <span className="text-danger"></span>
            </div>
          </div>

<div className="row">
  <div className="offset-sm-4 col-sm-4 d-grid">
    <button className="btn btn-primary" type="submit">Submit</button>
  </div>
  <div className="col-sm-4 d-grid">
    <Link to="/admit/products/create" className="btn btn-secondary" role="button">Cancel</Link>
  </div>
</div>


        </form>
      </div>
     </div>
    </div>
  )
}