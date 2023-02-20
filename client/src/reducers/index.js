import { combineReducers } from "redux";
import userReducer from "./userReducer";
import incidentReducer from "./incidentReducer";
import personnelReducer from "./personnelReducer";
import resourceReducer from "./resourceReducer";

export default combineReducers({
  user: userReducer, //store.user when using the selector
  incident: incidentReducer,
  personnel: personnelReducer,
  resources: resourceReducer
})