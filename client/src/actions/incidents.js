

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