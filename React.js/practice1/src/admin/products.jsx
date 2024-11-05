import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function ProductList(){
  const [products,setProducts]=useState([])

  function getProducts(){
    fetch("http://localhost:4000/products?_sort=id&_order=desc")
    .then(response =>{
      if(response.ok){
        return response.json()
      }

      throw new Error()
    })
    .then(data=>{
      setProducts(data)
    })
    .catch( error =>{
      alert("unanble to get the data")

    })
  }

 useEffect(getProducts,[])

  return(
      <div className="container my-4">
        <h2 className="text-center mb-4">Products</h2>

        <div className="row mb-3">
          <div className="col">
            <Link to="/admin/products/create" className="btn btn-primary me-1" role="button">Create Products</Link>
            <button className="btn btn-outline-primary" type="button" onClick={getProducts}>Refresh</button>

          </div>
        </div>

<table className="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Brand</th>
      <th>Category</th>
      <th>Price</th>
      <th>Image</th>
      <th>Created At</th>
      <th>Action</th>
    </tr>
  </thead>
<tbody>
{
  products.map((products, index)=>{
    return(
      <tr key={index}>
      <td>{products.id}</td>
      <td>{products.name}</td>
      <td>{products.brand}</td>
      <td>{products.category}</td>
      <td>{products.price}$</td>
      <td><img src={"http://localhost:4000/images/" + products.imageFilename} width="100" alt=".." /></td>
      <td>{products.createdAt.slice(0,10)}</td>


      <td style={{width:"10px",whiteSpace:"nowrap"}}>
        <Link className="btn btn-primary btn-sm me-1" to={"/admin/products/edit/" + products.id }>Edit</Link>
        <button className="btn btn-danger btn-sm" type="button">Delete</button>
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