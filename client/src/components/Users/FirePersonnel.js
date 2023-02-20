import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePersonnel } from "../../actions/personnel";

const FirePersonnel = ({ firePerson }) => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const adminClick = () => {
    fetch(`/users/${firePerson.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "admin" : !firePerson.admin })
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
    if(firePerson.admin === false){
      return(<button className="btn-small" onClick={adminClick}>Make Admin</button>)
    }else{
      return(<button className="btn-small" onClick={adminClick}>Revoke Admin</button>)
    }
  };

  return(
    <tr>
        <td>{firePerson.name}</td>
        <td>{firePerson.agency.name}</td>
        <td>{firePerson.position}</td>
        <td>{firePerson.admin ? 'Yes' : 'No'}</td>
        <td>{user[0].admin ? fireAdmin() : 'Non-Admin'}</td>
      </tr>
  )
};

export default FirePersonnel;