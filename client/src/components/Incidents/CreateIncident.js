import React, { useState } from "react";
import { addIncident } from '../../actions/incidents'

const beginningState = {
  name: '',
  severity: '',
  address: {
    address: '',
    city: '',
    state: '',
    zip: ''
  }
};

const CreateIncident = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(beginningState);


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/incidents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(form)
    })
    .then((r) => {
      if(r.ok){
        r.json().then((incident) => addIncident(incident))
      }else{
        r.json().then((error) => console.log(error.error))
      }
    })
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleAddress = (e) => {
    setForm({...form, address: {[e.target.name]: e.target.value}})
  }

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
              <select className="browser-default" defaultValue="Severity">
                <option disabled>Severity</option>
                <option name="High" value="High">High</option>
                <option name="Medium" value="Medium">Medium</option>
                <option name="Low" value="Low">Low</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input placeholder="Address" name="address" type="text" className="validate" value={ form.address.address } onChange={ handleAddress }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input placeholder="City" name="city" type="text" className="validate" value={ form.address.city } onChange={ handleChange }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input placeholder="State" name="state" type="text" className="validate" value={ form.address.state } onChange={ handleChange }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input placeholder="Zip" name="zip" type="text" className="validate" value={ form.address.zip } onChange={ handleChange }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
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