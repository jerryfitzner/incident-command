import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePersonnel } from "../../actions/personnel";

const PolicePersonnel = ({ policePerson }) => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const adminClick = () => {
    fetch(`/users/${policePerson.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "admin" : !policePerson.admin })
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
    if(policePerson.admin === false){
      return(<button className="btn-small" onClick={adminClick}>Make Admin</button>)
    }else{
      return(<button className="btn-small" onClick={adminClick}>Revoke Admin</button>)
    }
  };

  return(
    <tr>
        <td>{policePerson.name}</td>
        <td>{policePerson.agency.name}</td>
        <td>{policePerson.position}</td>
        <td>{policePerson.admin ? 'Yes' : 'No'}</td>
        <td>{user[0].admin ? fireAdmin() : 'Non-Admin'}</td>
      </tr>
  )
};

export default PolicePersonnel;