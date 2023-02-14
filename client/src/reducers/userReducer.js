const initialState = null

const userReducer = (state=initialState, action) => {
  switch(action.type) {
    case "ADD_USER":
      return [action.payload]
    case "DELETE_USER":
      // debugger;
      return state.filter(user => user.name !== action.payload.name);
    default:
      return state;
  }

}

export default userReducer;