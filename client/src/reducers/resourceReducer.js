const initialState = []

const resourceReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOAD_RESOURCES":
      return action.payload
    case "UPDATE_RESOURCE":
      const updatedResource = state.map((unit) => {
        if(unit.id === action.payload.id){
          return action.payload
        } else {
          return unit
        }
      })
      return updatedResource 
    default:
      return state;
  }

}

export default resourceReducer;