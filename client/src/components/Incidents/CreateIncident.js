import React, { useState } from "react";
import { addIncident } from '../../actions/incidents'
import { useDispatch } from "react-redux";

const beginningFormState = {
  name: '',
  severity: 'High'
};

// const beginningAddressState = {
//   address: '',
//   city: '',
//   state: '',
//   zip: ''
// };

const CreateIncident = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(beginningFormState);
  const [errors, setErrors] = useState([]);
  // const [address, setAddress] = useState(beginningAddressState);

  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/incidents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify( form )
    })
    .then((r) => {
      if(r.ok){
        r.json().then((incident) => {
          dispatch(addIncident(incident)); 
          setShowForm(false);
          setForm(beginningFormState);
          setErrors([]);
        })
      }else{
        r.json().then((error) => setErrors(error.errors))
      }
    })
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  // const handleAddress = (e) => {
  //   setAddress({...address, [e.target.name]: e.target.value})
  // }

  return(
    <div className="center-align">
      {showForm ? (
        <>
        <button className="btn" onClick={() => setShowForm(!showForm)}>Close</button>
        <div className="row">
          
        <form className="col s12 m12 l6" onSubmit={ handleSubmit }>
          <div className="row">
            <div className="input-field">
              <input placeholder="Name" name="name" type="text" className="validate" value={ form.name } onChange={ handleChange }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <select className="browser-default" value={form.severity} name="severity" onChange={handleChange}>
                <option disabled>Severity</option>
                <option name="severity" value="High">High</option>
                <option name="severity" value="Medium">Medium</option>
                <option name="severity" value="Low">Low</option>
              </select>
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
          <button className="btn waves-effect waves-light" type="submit" name="submit">Create Incident
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
      </>
      ):(
        <button className="btn" onClick={() => setShowForm(!showForm)}>Create Incident</button>
      )}
    </div>
  )
}

export default CreateIncident;


          // <div className="row">
          //   <div className="input-field">
          //     <input placeholder="Address" name="address" type="text" className="validate" value={ address.address } onChange={ handleAddress }/>
          //     {/* <label >First Name</label> */}
          //   </div>
          // </div>
          // <div className="row">
          //   <div className="input-field">
          //     <input placeholder="City" name="city" type="text" className="validate" value={ address.city } onChange={ handleAddress }/>
          //     {/* <label >First Name</label> */}
          //   </div>
          // </div>
          // <div className="row">
          //   <div className="input-field">
          //     <input placeholder="State" name="state" type="text" className="validate" value={ address.state } onChange={ handleAddress }/>
          //     {/* <label >First Name</label> */}
          //   </div>
          // </div>
          // <div className="row">
          //   <div className="input-field">
          //     <input placeholder="Zip" name="zip" type="text" className="validate" value={ address.zip } onChange={ handleAddress }/>
          //     {/* <label >First Name</label> */}
          //   </div>
          // </div>