export const loadUser = () => {
  
}

export const addIncident = incident => {
  return {
    type: "ADD_INCIDENT",
    payload: incident
  }
}