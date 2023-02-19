import { combineReducers } from "redux";
import userReducer from "./userReducer";
import incidentReducer from "./incidentReducer";

export default combineReducers({
  user: userReducer, //store.user when using the selector
  incident: incidentReducer
})