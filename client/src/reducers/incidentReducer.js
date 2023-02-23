const initialState = []

const incidentReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOAD_INCIDENTS":
        return action.payload
    case "ADD_INCIDENT":
      return [...state, action.payload]
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
      console.log(updatedIncident)
      return updatedIncident
    case "ADD_EV_TO_INCIDENT":
      return state
    case "REMOVE_EV_FROM_INCIDENT":
      // console.log(action.payload)
      const removedEvIncident = state.map((incident) => {
          const updatedEV = incident.emergency_vehicles.filter((ev) => {
            return ev.id !== action.payload.id
          })
          return {...incident, emergency_vehicles: updatedEV }
      })
      console.log(removedEvIncident)
      return removedEvIncident
    case "DELETE_INCIDENT":
      // debugger;
      return state.filter(user => user.name !== action.payload.name);
    default:
      return state;
  }

}

export default incidentReducer;