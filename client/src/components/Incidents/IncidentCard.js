import React, {useState} from "react";
import { Link } from "react-router-dom";
import Units from "./Units";




const IncidentCard = ({ incident }) => {
  const { address, city, state, zip } = incident.address; 
  // const [tab, setTab] = useState(<Units/>);
  
  



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
        </div>
        <button className="btn centered">Assign Unit</button>
      </div>
    </div>
  )
}

export default IncidentCard;