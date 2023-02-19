const initialState = []

const incidentReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOAD_INCIDENTS":
        return action.payload
    case "ADD_INCIDENT":
      return [...state, action.payload]
    case "DELETE_INCIDENT":
      // debugger;
      return state.filter(user => user.name !== action.payload.name);
    default:
      return state;
  }

}

export default incidentReducer;