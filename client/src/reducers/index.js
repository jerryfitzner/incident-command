import { combineReducers } from "redux";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer, //store.user when using the selector
  // incident: incidentReducer
})