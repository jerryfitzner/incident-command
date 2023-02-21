import React, { useEffect, useState } from "react";
import { addUser } from "../actions/user";
import { useDispatch } from "react-redux";

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
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSignupForm({...signupForm, [e.target.id]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(signupForm)
    })
    .then((r) => {
      if(r.ok){
        r.json().then((user) => dispatch(addUser(user)))
      }else{
        r.json().then((error) => console.log(error))
      }
    })
    console.log(signupForm)
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

  const agencyList = () => agencies.map((agency) => {
    return(<option id={agency.id} key={agency.id} value={agency.id}>{agency.name}</option>)
  })


  return(
    <div className="App">
      <h1>Sign-Up</h1>
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
              <select id="agency_id" className="browser-default" defaultValue="Please Select an Agency" onChange={ handleChange }>
                <option disabled>Please Select an Agency</option>
                {agencyList()}
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
    </div>
  )
}

export default Signup;