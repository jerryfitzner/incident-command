import React, { useState } from "react";

const CreateIncident = () => {
  const [form, setForm] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(!form)
  }

  return(
    <div className="center">
      {form ? (
        <div className="row">
        <form className="col s12 m6" onSubmit={ handleSubmit }>
          <div className="row">
            <div className="input-field">
              <input placeholder="Name" id="name" type="text" className="validate" value={ signupForm.name } onChange={ handleChange }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input placeholder="Position/Rank" id="position" type="text" className="validate" value={ signupForm.position } onChange={ handleChange }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <select className="browser-default">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input placeholder="Username" id="username" type="text" className="validate" value={ signupForm.username } onChange={ handleChange }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input placeholder="Password" id="password" type="text" className="validate" value={ signupForm.password } onChange={ handleChange }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input placeholder="Password Confirmation" id="password_confirmation" type="text" className="validate" value={ signupForm.password_confirmation } onChange={ handleChange }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="submit">Create Account
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
      ):(
        <button className="btn" onClick={() => setForm(!form)}>Create Incident</button>
      )}
    </div>
  )
}

export default CreateIncident;