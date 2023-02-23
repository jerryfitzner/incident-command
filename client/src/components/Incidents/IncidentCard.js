import React, {useState} from "react";
import Units from "./Units";




const IncidentCard = ({ incident, availUnits }) => {
  const { address, city, state, zip } = incident.address; 
  const [toggleAddUnit, setToggleAddUnit] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("default");


  

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
          r.json().then((unit) => console.log(unit))
        }else{
          r.json().then((error) => console.log(error.error))
        }
      })
    };
    
    // fetch(`/emergency_vehciles/${e.target.id}`)
  }
  
  
  const availUnitsOptions = availUnits.map((unit) => {
      return(
        <option value={unit.id} key={unit.id}>{unit.call_sign} - {unit.agency.emergency_service}</option>
      )
    });


  return(
    <div className="col s12 m12 l6">
      <div className="card hoverable">
        <div className="card-content">
          <div className="center-align">
            <h5 className="card-title">{incident.name}</h5>
            <p>Severity: <strong>{incident.severity}</strong></p>
          </div>
          <div className="divider"></div>
          <div className="section">
            <p>{address}</p>
            <p>{city}, {state} {zip}</p>
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