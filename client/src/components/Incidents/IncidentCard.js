import React, {useState, useEffect } from "react";
import { loadResources, updateResource } from "../../actions/resource";
import { addEvIncident, updateIncident } from "../../actions/incidents";
import { deleteIncident } from "../../actions/incidents";
import { useDispatch } from "react-redux";
import Units from "./Units";


const IncidentCard = ({ incident, availUnits }) => {
  const [toggleAddUnit, setToggleAddUnit] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("default");
  const [showForm, setShowForm] = useState(false);
  const [addressForm, setAddressForm] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
    incident_id: incident.id
  });

  const dispatch = useDispatch();

  const handleUnitAssign = (e) => {
    e.preventDefault();
    if(selectedUnit !== "default"){
      fetch(`/emergency_vehicles/${selectedUnit}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({incident_id: incident.id, status: "Assigned"})
      })
      .then((r) => {
        if(r.ok){
          r.json().then((unit) => {
            dispatch(updateResource(unit));
            dispatch(addEvIncident(unit));
            setToggleAddUnit(!toggleAddUnit)
          })
        }else{
          r.json().then((error) => console.log(error.error))
        }
      })
    };
  }

  const handleChange = (e) => {
    setAddressForm({...addressForm, [e.target.name]: e.target.value})
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    fetch('/addresses', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({address: addressForm})
    })
    .then((r) => {
      if(r.ok){
        r.json().then((incident) =>{ 
          dispatch(updateIncident((incident)));
          showAddressForm();
        })
      }else{
        r.json().then((error) => console.log(error))
      }
    })
  };

  const handleAddressUpdate = (e) => {
    e.preventDefault();
    fetch(`/addresses/${incident.address.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({address: addressForm})
    })
    .then((r) => {
      if(r.ok){
        r.json().then((incident) =>{ 
          dispatch(updateIncident((incident)));
          showAddressForm();
        })
      }else{
        r.json().then((error) => errorHandler(error))
      }
    })
  };

  const editAddress = () => {
    if(incident.address === null){
      return(
        <form onSubmit={handleAddressSubmit}>
          <input type="text" placeholder="Address" name="address" value={addressForm.address} onChange={ handleChange }></input>
          <input type="text" placeholder="City" name="city" value={addressForm.city} onChange={ handleChange }></input>
          <input type="text" placeholder="State" name="state" value={addressForm.state} onChange={ handleChange }></input>
          <input type="text" placeholder="Zip" name="zip" value={addressForm.zip} onChange={ handleChange }></input>
          <button type="submit" className="btn">Save</button><button onClick={showAddressForm} className="btn" >Close</button>
        </form>
      )
    }else{
      // const { address, city, state, zip } = incident.address;
      // setAddressForm({
      //     address: incident.address.address,
      //     city: incident.address.city,
      //     state: incident.address.state,
      //     zip: incident.address.zip,
      //     incident_id: incident.id
      //   });
      return(
        <form onSubmit={handleAddressUpdate}>
          <input type="text" placeholder="Address" name="address" value={addressForm.address} onChange={ handleChange }></input>
          <input type="text" placeholder="City" name="city" value={addressForm.city} onChange={ handleChange }></input>
          <input type="text" placeholder="State" name="state" value={addressForm.state} onChange={ handleChange }></input>
          <input type="text" placeholder="Zip" name="zip" value={addressForm.zip} onChange={ handleChange }></input>
          <button type="submit" className="btn">Update</button><button onClick={showAddressForm} className="btn" >Close</button>
        </form>
      )
    }
  }

  const showAddressForm = () => setShowForm(!showForm);


  const isAddress = () => {
    if(incident.address === null){
      return(
        <div onClick={showAddressForm}>
          <p>Please add an address.</p>
        </div>
      )
    }else{
      const { address, city, state, zip } = incident.address;
      // setAddressForm({
      //   address: address,
      //   city: city,
      //   state: state,
      //   zip: zip,
      //   incident_id: incident.id
      // });
      return(
        <div onClick={showAddressForm}>
          <p>{address}</p>
          <p>{city}, {state} {zip}</p>
        </div>
      )
    }
  }
  
  const incidentDelete = () => {
    fetch(`/incidents/${incident.id}`, {
      method: 'DELETE'
    })
    .then((r) => {
      if(r.ok){
        dispatch(deleteIncident(incident.id));
        dispatch(loadResources())
      }else{
        r.json().then((error) => console.log(error))
      }
    })
  }

  const errorHandler = (error) => {
    error.array.forEach(element => {
      console.log(element)
    })
    return(
      <div>

      </div>
    )
  };
  
  const availUnitsOptions = availUnits.map((unit) => {
      return(
        <option value={unit.id} key={unit.id}>{unit.call_sign} - {unit.agency.emergency_service}</option>
      )
    });


  return(
    <div className="col s12 m12 l6">
      <div className="card hoverable">
          <div><button onClick={incidentDelete} className="btn-floating right waves-effect waves-light red lighten-3"><i className="material-icons right">close</i></button></div>
        <div className="card-content">
          <div className="center-align">
            <h5 className="card-title">{incident.name}</h5>
            <p>Severity: <strong>{incident.severity}</strong></p>
          </div>
          <div className="divider"></div>
          <div className="section">
            {showForm ? editAddress() : isAddress()}
          </div>
        </div>
        {/* <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <li className="tab"><Link onClick={() => setTab(<Units />)}>Test 1</Link></li>
            <li className="tab"><Link onClick={() => setTab(<Agencies />)}>Test 1</Link></li>
          </ul>
        </div> */}
        <div className="card-content grey lighten-4">
          <Units units={incident.emergency_vehicles}/>
          {/* <Units units={incident.emergency_vehicles}/> */}
          {toggleAddUnit ? (
            <div className="input-field">
              <h5>Available</h5>
              <form onSubmit={handleUnitAssign}>
              <select name="" className="browser-default" value={selectedUnit} onChange={(e) => setSelectedUnit(e.target.value)}>
                <option value="default" disabled>Select a Unit</option>
                {availUnitsOptions}
              </select>
              <button className="btn-small" type="submit">Assign Unit</button>
              </form>
            </div>
          ):(
            <></>
          )}
        </div>
        <div className="center">
          <button className="btn" onClick={() => setToggleAddUnit(!toggleAddUnit)}>{toggleAddUnit ? 'Close' : 'Assign Unit'}</button>
        </div>
      </div>
    </div>
  )
}

export default IncidentCard;