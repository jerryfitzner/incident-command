import React from "react";
import { useState, useEffect } from "react";
import { updateResource } from "../../actions/resource";
import { updateEvIncident, removeEvIncident } from "../../actions/incidents";
import { useDispatch } from "react-redux";

const Unit = ({ ev }) => {
  const [newStatus, setNewStatus] = useState(`${ev.status}`);
  const dispatch = useDispatch();

  useEffect(() => {if(ev.status === "Assigned"){
    setNewStatus("Enroute")
  }else if(ev.status === "Enroute"){
    setNewStatus("Arrived")
  }else{
    setNewStatus("Assigned")
  }},[ev]);

  const vehicleImage = () => {
    if(ev.agency.emergency_service === 'Fire'){
      return(`🚒  ${ev.agency.name}`)
    }else if(ev.agency.emergency_service === 'Medical'){
      return (`🚑  ${ev.agency.name}`)
    }else if(ev.agency.emergency_service === 'Police'){
      return (`🚓  ${ev.agency.name}`)
    }else{
      return (`⚝  ${ev.agency.name}`)
    }
  };

  const vehicleStatus = () => {
    if(ev.status === 'Assigned'){
      return ('red lighten-3')
    }
    if(ev.status === 'Enroute'){
      return ('yellow lighten-3')
    }
    if(ev.status === 'Arrived'){
      return ('light-green lighten-3')
    }
  };

  const handleClick = () => {
    fetch(`/emergency_vehicles/${ev.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({status: `${newStatus}`})
    })
    .then((r) => {
      if(r.ok){
        r.json().then((ev) => {
          dispatch(updateEvIncident(ev));
          dispatch(updateResource(ev))
        })
      }else{
        r.json().then((error) => console.log(error.error))
      }
    })
  };

  

  const handleRemoveClick = () => {
    setNewStatus("Unassigned");
    fetch(`/emergency_vehicles/${ev.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({status: "Unassigned", incident_id: null})
    })
    .then((r) => {
      if(r.ok){
        r.json().then((vehicle) => {
          // console.log(ev);
          dispatch(removeEvIncident(ev));
          dispatch(updateResource(vehicle))
        })
      }else{
        r.json().then((error) => console.log(error.error))
      }
    })
  }


  return(
  <tr>
    <td>{vehicleImage()}</td>
    <td>{ev.call_sign}</td>
    <td onClick={handleClick} className={vehicleStatus()}>{ev.status}</td>
    <td><button className="btn-small" onClick={handleRemoveClick}>X</button></td>
  </tr>
  )
}

export default Unit;