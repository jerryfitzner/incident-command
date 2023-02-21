import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Units from "./Units";




const IncidentCard = ({ incident }) => {
  const { address, city, state, zip } = incident.address; 
  const [toggleAddUnit, setToggleAddUnit] = useState(false);
  // const [tab, setTab] = useState(<Units/>);


  // const showUnits = () => {
  //   {toggleAddUnit ? (
  //     return(<></>)
  //   ):(
  //     return(<></>)
  //   )}
  // }
  const units = useSelector((store) => store.resources);
  const availableUnits = units.filter((resource) => resource.length < 6)

  console.log(units)
  // Need to call units from DB prior. Right now they are only getting called in resources page render. 
  



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
              <select className="browser-default" defaultValue="Select Available Unit">
                <option disabled>Select Available Unit</option>
                <option name="High" value="High">High</option>
                <option name="Medium" value="Medium">Medium</option>
                <option name="Low" value="Low">Low</option>
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