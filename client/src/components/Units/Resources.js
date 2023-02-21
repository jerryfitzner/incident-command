import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadResources } from "../../actions/resource";
import PoliceResources from "./PoliceResources";
import MedicalResources from "./MedicalResources";
import OtherResources from "./OtherResources";
import FireResources from "./FireResources";


const Resources = () => {
  const [ fire, setFire ] = useState([]);
  const [ medical, setMedical ] = useState([]);
  const [ police, setPolice ] = useState([]);
  const [ other, setOther ] = useState([]);
  // const [ mod, setMod ] = useState();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadResources())
  // }, []);

  const resources = useSelector((store) => store.resources);

  useEffect(() => {
    const fireResources = [];
    const policeResources = [];
    const medicalResources = [];
    const otherResources = [];
    resources.map((resource) => {
      if(resource.agency.emergency_service === 'Fire'){
        fireResources.push(resource);
      }else if(resource.agency.emergency_service === 'Medical'){
        medicalResources.push(resource);
      }else if(resource.agency.emergency_service === 'Police'){
        policeResources.push(resource);
      }else{
        otherResources.push(resource);
      }
    });
    setFire(fireResources);
    setPolice(policeResources);
    setMedical(medicalResources);
    setOther(otherResources);
  }, [resources]) 

  
  return(
  <div className="App center-align">
    {/* {mod} */}
    <h3>Resources</h3>
    <div className="card">
      <div>
        <h5>🚒 Fire</h5>
        <table className="centered">
          <thead>
            <tr>
              <th>Agency</th>
              <th>Unit #</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {fire.map((fireResource) => <FireResources key={fireResource.id} fireResource={ fireResource }/>)}
          </tbody>
        </table>
      </div>
    </div>
    <div className="card">
      <div>
        <h5>🚑 Medical</h5>
        <table className="centered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Agency</th>
              <th>Position</th>
              <th>Admin</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {medical.map((medResource) => <MedicalResources key={medResource.id} medicalResource={ medResource }/>)}
          </tbody>
        </table>
      </div>
    </div>
    <div className="card">
      <div>
        <h5>🚓 Police</h5>
        <table className="centered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Agency</th>
              <th>Position</th>
              <th>Admin</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {police.map((policeResource) => <PoliceResources key={policeResource.id} policeResource={ policeResource }/>)}
          </tbody>
        </table>
      </div>
    </div>
    <div className="card">
      <div>
        <h5>⚝ Other Resources</h5>
        <table className="centered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Agency</th>
              <th>Position</th>
              <th>Admin</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {other.map((otherResource) => <OtherResources key={otherResource.id} otherResource={ otherResource }/>)}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
};

export default Resources;