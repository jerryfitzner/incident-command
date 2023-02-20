const initialState = []

const personnelReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOAD_PERSONNEL":
      return action.payload
    case "UPDATE_PERSONNEL":
      const updatedPersonnel = state.map((person) => {
        if(person.id === action.payload.id){
          return action.payload
        } else {
          return person
        }
      })
      return {...state, updatedPersonnel }
    default:
      return state;
  }

}

export default personnelReducer;