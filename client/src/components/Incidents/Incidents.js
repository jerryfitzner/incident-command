import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateIncident from "./CreateIncident";
import IncidentCard from "./IncidentCard";

const Incidents = () => {
  const incidents  = useSelector((store) => (store.incident));
  const dispatch = useDispatch();


  const incidentCards = incidents.map((incident) => <IncidentCard key={incident.id} incident={incident} />)

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