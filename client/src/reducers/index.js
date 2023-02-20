import { combineReducers } from "redux";
import userReducer from "./userReducer";
import incidentReducer from "./incidentReducer";
import personnelReducer from "./personnelReducer";

export default combineReducers({
  user: userReducer, //store.user when using the selector
  incident: incidentReducer,
  personnel: personnelReducer
})