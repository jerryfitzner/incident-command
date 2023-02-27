import React, { useEffect } from "react";
import { loadIncidents } from "../actions/incidents";
import { useDispatch } from "react-redux";
import Incidents from "./Incidents/Incidents";
import { loadResources } from "../actions/resource";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIncidents());
    dispatch(loadResources())
  }, []);

  

  return(
    <>
    <div className="App center-align">
      <h3>Incident Command</h3>
      

      <img src={require("../map2.png")} />
      <div>
        <h5>Map Coming Soon!</h5>
      </div>
    </div>
    <div>
      <Incidents />
    </div>
    </>
  )
}

export default Home;