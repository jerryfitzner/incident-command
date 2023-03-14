import { addUser } from "../actions/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


const Login = () => {
  const [userName, setUserName] = useState(""); 
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userName, password);
    fetch('/login', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: userName, 
        password: password
      }),
    }).then((r) => {
      if(r.ok){
        r.json().then((user) => {
          dispatch(addUser(user));
          navigate("/");
          setUserName('');
          setPassword('');
          setErrors([])
        })
      }else{
        r.json().then(error => setErrors(error))
      }
    });
  }

  return (
    <div className="App">
      <h1>Incident Command</h1>
      <div className="row">
        <form className="col s12" onSubmit={ handleSubmit }>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Username" id="first_name" type="text" className="validate" value={ userName } onChange={ e => setUserName(e.target.value) }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Password" id="first_name" type="password" className="validate" value={ password } onChange={ e => setPassword(e.target.value) }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          {(
            <ul style={{ color: "red" }}>
              {Object.keys(errors).map((key) => {
              const errorKey = key
              const errorString = errors[key].toString();
              return(
                <li key={key}>{errorKey} {errorString}</li>
                )})}
            </ul>
          )}
          <button className="btn waves-effect waves-light" type="submit" name="submit">Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  )
};


export default Login;