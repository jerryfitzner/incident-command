

export const loadIncidents = () => {
  return (dispatch) => {
  fetch('/incidents')
  .then((r) => r.json())
  .then((incidents) => dispatch({type: "LOAD_INCIDENTS", payload: incidents}))
  }
}

export const addIncident = (incident) => {
  return {
    type: "ADD_INCIDENT",
    payload: incident
  }
}

export const updateIncident = (incident) => {
  return {
    type: "UPDATE_INCIDENT",
    payload: incident
  }
}

export const addEvIncident = (vehicle) => {
  return {
    type: "ADD_EV_TO_INCIDENT", 
    payload: vehicle
  }
}

export const updateEvIncident = (vehicle) => {
  return {
    type: "UPDATE_EV_TO_INCIDENT", 
    payload: vehicle
  }
}

export const removeEvIncident = (vehicle) => {
  return {
    type: "REMOVE_EV_FROM_INCIDENT", 
    payload: vehicle
  }
}

export const deleteIncident = (incident) => {
  return {
    type: "DELETE_INCIDENT",
    payload: incident
  }
}

// export const loadIncidents = (incidents) => {
//   return {
//     type: "LOAD_INCIDENTS",
//     payload: incidents
//   }
// }