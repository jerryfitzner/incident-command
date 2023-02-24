const initialState = []

const incidentReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOAD_INCIDENTS":
        return action.payload
    case "ADD_INCIDENT":
      return [...state, action.payload]
    case "UPDATE_INCIDENT":
      const updatedIncidents = state.map((incident) => {
        if(incident.id === action.payload.id){
          return action.payload
        } else {
          return incident
        }
      })
      return updatedIncidents 
    case "UPDATE_EV_TO_INCIDENT":
      const updatedIncident = state.map((incident) => {
        if(incident.id === action.payload.incident.id){
          const updatedEV = incident.emergency_vehicles.map((ev) => {
            if(action.payload.id === ev.id){
              return action.payload
            } else {
              return ev
            }
          })
          return {...incident, emergency_vehicles: updatedEV }
        } else {
          return incident
        }
      })
      return updatedIncident
    case "ADD_EV_TO_INCIDENT":
      const evAddToIncident = state.map((incident) => {
        if(incident.id === action.payload.incident.id){
          const updInc = incident.emergency_vehicles.push(action.payload);
          return updInc
        } else {
          return incident
        }})
      return state
    case "REMOVE_EV_FROM_INCIDENT":
      const removedEvIncident = state.map((incident) => {
          const updatedEV = incident.emergency_vehicles.filter((ev) => {
            return ev.id !== action.payload.id
          })
          return {...incident, emergency_vehicles: updatedEV }
      })
      return removedEvIncident
    case "DELETE_INCIDENT":
      // debugger;
      return state.filter(incident => incident.id !== action.payload);
    default:
      return state;
  }

}

export default incidentReducer;