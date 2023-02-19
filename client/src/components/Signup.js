import React, { useEffect, useState } from "react";

const beginningState = {
  name: '',
  position: '',
  agency_id: 0,
  username: '',
  password: '',
  password_confirmation: ''
};

const Signup = () => {
  const [signupForm, setSignupForm] = useState(beginningState);
  const [agencies, setAgencies] = useState([]);

  const handleChange = (e) => {
    setSignupForm({...signupForm, [e.target.id]: e.target.value})
  };

  const handleSubmit = () => {
    console.log("Submit")
  };

  useEffect(() => {
    fetch('/agency-names')
      .then((r) => {
        if(r.ok){
          r.json().then(agencyNames => {
            setAgencies(agencyNames);
            setSignupForm({...signupForm, agency_id: agencyNames[0].id});
          })
        }else{
          r.json().then(error => console.log(error.error))
        }
      })
  }, [])


  return(
    <div className="App">
      <h1>Sign-Up</h1>
      <div className="row">
        <form className="col s12" onSubmit={ handleSubmit }>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Name" id="name" type="text" className="validate" value={ signupForm.name } onChange={ handleChange }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Position/Rank" id="position" type="text" className="validate" value={ signupForm.position } onChange={ handleChange }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <select>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Username" id="username" type="text" className="validate" value={ signupForm.username } onChange={ handleChange }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Password" id="password" type="text" className="validate" value={ signupForm.password } onChange={ handleChange }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Password Confirmation" id="password_confirmation" type="text" className="validate" value={ signupForm.password_confirmation } onChange={ handleChange }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="submit">Create Account
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup;