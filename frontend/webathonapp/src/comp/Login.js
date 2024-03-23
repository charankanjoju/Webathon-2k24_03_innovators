import React from 'react'
import { Link } from "react-router-dom";
import "./Login.css"
function Login() {
  return (
    <div className='container  justify-content-center allign-item-center col-sm-4 p-4 '>
        <form>
        <div class="col-sm-10">
      <div class="form-check ">
        <input class="form-check-input d-inline" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
        <label class="form-check-label" for="gridRadios1">
          Alumni
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input d-inline" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        <label class="form-check-label" for="gridRadios2">
          Student
        </label>
      </div>
      </div>
        <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Username</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <Link className="nav-link" to="../aflogin">
  <button type="submit" class="btn btn-success text-center">Login</button>
  </Link>
  
    </form>
    </div>
  )
}

export default Login
