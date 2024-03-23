import React from 'react';
import "./Register.css"
function Register() {
  return (
    <div className='body'>
    <div className='container justify-content-center allign-item-center col-sm-4 p-4 '>
     <form>
     <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Your cadre</legend>
    <div class="col-sm-10">
      <div class="form-check ">
        <input class="form-check-input d-inline" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
        <label class="form-check-label" for="gridRadios1">
          Alumini
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input d-inline" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        <label class="form-check-label" for="gridRadios2">
          Student
        </label>
      </div>
    </div>
  </fieldset>
  
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
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Roll Number</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" />
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Branch</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail4"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Phone</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" />
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Register</button>
</form>
   </div>
   </div>
  );
}

export default Register;