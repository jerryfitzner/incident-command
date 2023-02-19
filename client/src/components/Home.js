import React, { useEffect } from "react";
import { loadIncidents } from "../actions/incidents";
import { useDispatch } from "react-redux";
import Incidents from "./Incidents/Incidents";

const Home = () => {
  // const incidents = useSelector((store) => (store.incident));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIncidents())
  }, []);

  

  return(
    <>
    <div className="App center-align">
      <h3>Incident Command</h3>
      <img src="./public/logo512.png" />
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