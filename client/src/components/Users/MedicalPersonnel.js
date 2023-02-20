import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePersonnel } from "../../actions/personnel";

const MedicalPersonnel = ({ medicalPerson }) => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const adminClick = () => {
    fetch(`/users/${medicalPerson.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "admin" : !medicalPerson.admin })
    })
    .then((r) => {
      if(r.ok){
        r.json().then((person) => dispatch(updatePersonnel(person)))
      } else (
        r.json().then((error) => {console.log(error.error)})
      )
    })
  }

  const fireAdmin = () => {
    if(medicalPerson.admin === false){
      return(<button className="btn-small" onClick={adminClick}>Make Admin</button>)
    }else{
      return(<button className="btn-small" onClick={adminClick}>Revoke Admin</button>)
    }
  };

  return(
    <tr>
        <td>{medicalPerson.name}</td>
        <td>{medicalPerson.agency.name}</td>
        <td>{medicalPerson.position}</td>
        <td>{medicalPerson.admin ? 'Yes' : 'No'}</td>
        <td>{user[0].admin ? fireAdmin() : 'Non-Admin'}</td>
      </tr>
  )
};

export default MedicalPersonnel;