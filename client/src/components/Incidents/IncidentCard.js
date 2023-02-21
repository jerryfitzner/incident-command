import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Units from "./Units";




const IncidentCard = ({ incident, availUnits }) => {
  const { address, city, state, zip } = incident.address; 
  const [toggleAddUnit, setToggleAddUnit] = useState(false);
  
  
  const availUnitsOptions = availUnits.map((unit) => {
      console.log(unit)
      return(
        <option id={unit.id} key={unit.id}>{unit.call_sign} - {unit.agency.emergency_service}</option>
      )
    });


  return(
    <div className="col s12 m6">
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
              <select className="browser-default" defaultValue="Select Available Unit">
                <option disabled>Select Available Unit</option>
                {availUnitsOptions}
              </select>
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