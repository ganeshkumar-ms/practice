import React from "react"; 

function Login(){
    return(
        <div className="loginpage" class="text-center mt-5">
            <form action="">
            <img src="https://logosmarcas.net/wp-content/uploads/2020/11/Reddit-Emblema.png" alt="" height="50px"/>
              <h1>Reddit Login</h1>
              <label htmlFor=""  class="fw-medium p-2">Username: </label>
              <input type="text" name="" id="" /><br />
              <label htmlFor="" class="fw-medium p-2">Password: </label>
              <input type="password" name="" id="" /><br />
              <button class="gap-3 rounded-3 btn btn-warning mt-2" type="submit">Submit</button>
            </form>
        
        </div>
    )
}

export default Login;