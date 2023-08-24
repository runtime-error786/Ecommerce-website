import React from "react";

function GI()
{
    return(
        <>
        <form>
            <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Firstname" aria-label="username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Lastname" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Email " aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Contact no" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder=" Temporary Address" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder=" Permanent Address" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder=" Country " aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder=" City" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
  Female
  </label>
</div>
<div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12 text-center">
    <button class="btn btn-primary text" type="submit">Submit</button>
  </div>
</form>
        </>
    )
}

export default GI;