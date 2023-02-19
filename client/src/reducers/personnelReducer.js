const initialState = []

const personnelReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOAD_PERSONNEL":
        return action.payload
    default:
      return state;
  }

}

export default personnelReducer;