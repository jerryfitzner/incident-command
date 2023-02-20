import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePersonnel } from "../../actions/personnel";

const OtherPersonnel = ({ otherPerson }) => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const adminClick = () => {
    fetch(`/users/${otherPerson.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "admin" : !otherPerson.admin })
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
    if(otherPerson.admin === false){
      return(<button className="btn-small" onClick={adminClick}>Make Admin</button>)
    }else{
      return(<button className="btn-small" onClick={adminClick}>Revoke Admin</button>)
    }
  };

  return(
    <tr>
        <td>{otherPerson.name}</td>
        <td>{otherPerson.agency.name}</td>
        <td>{otherPerson.position}</td>
        <td>{otherPerson.admin ? 'Yes' : 'No'}</td>
        <td>{user[0].admin ? fireAdmin() : 'Non-Admin'}</td>
      </tr>
  )
};

export default OtherPersonnel;