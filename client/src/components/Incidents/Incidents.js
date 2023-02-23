import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateIncident from "./CreateIncident";
import IncidentCard from "./IncidentCard";

const Incidents = () => {
  const incidents  = useSelector((store) => (store.incident));
  const units = useSelector((store) => store.resources);
  const availableUnits = units.filter((resource) => {
    return(resource.active === true && resource.status === "Unassigned")
  })

  

  // console.log(availableUnits)
  const dispatch = useDispatch();


  const incidentCards = incidents.map((incident) => <IncidentCard key={incident.id} availUnits={availableUnits} incident={incident} />)

  return(
    <div>
      <h4 className="center-align">Active Incidents</h4>
      <CreateIncident />
      <div className="row">
        {/* <div className="col s6"> */}
        {incidentCards}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Incidents;