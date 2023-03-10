import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPersonnel } from "../../actions/personnel";
import FirePersonnel from "./FirePersonnel";
import MedicalPersonnel from "./MedicalPersonnel";
import PolicePersonnel from "./PolicePersonnel";
import OtherPersonnel from "./OtherPersonnel";

const Users = () => {
  const [ fire, setFire ] = useState([]);
  const [ medical, setMedical ] = useState([]);
  const [ police, setPolice ] = useState([]);
  const [ other, setOther ] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPersonnel())
  }, []);

  const personnel = useSelector((store) => store.personnel);

  useEffect(() => {
    const firePersonnel = [];
    const policePersonnel = [];
    const medicalPersonnel = [];
    const otherPersonnel = [];
    personnel.map((person) => {
      if(person.agency.emergency_service === 'Fire'){
        firePersonnel.push(person);
      }else if(person.agency.emergency_service === 'Medical'){
        medicalPersonnel.push(person);
      }else if(person.agency.emergency_service === 'Police'){
        policePersonnel.push(person);
      }else{
        otherPersonnel.push(person);
      }
    });
    setFire(firePersonnel);
    setPolice(policePersonnel);
    setMedical(medicalPersonnel);
    setOther(otherPersonnel);
  }, [personnel]) 

  



  return(
  <div className="App center-align">
    <h3>Personnel</h3>
    <div className="card">
      <div>
        <h5>🚒 Fire</h5>
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
            {fire.map((firePerson) => <FirePersonnel key={firePerson.id} firePerson={ firePerson }/>)}
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
            {medical.map((medPerson) => <MedicalPersonnel key={medPerson.id} medicalPerson={ medPerson }/>)}
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
            {police.map((policePerson) => <PolicePersonnel key={policePerson.id} policePerson={ policePerson }/>)}
          </tbody>
        </table>
      </div>
    </div>
    <div className="card">
      <div>
        <h5>⚝ Other Personnel</h5>
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
            {other.map((otherPerson) => <OtherPersonnel key={otherPerson.id} otherPerson={ otherPerson }/>)}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
};

export default Users;