import React from "react";
import { useDispatch } from "react-redux";
import { updateResource } from "../../actions/resource";

const MedicalResources = ({ medicalResource }) => {
  const dispatch = useDispatch();

  const onlineClick = () => {
    fetch(`/emergency_vehicles/${medicalResource.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "active" : !medicalResource.active })
    })
    .then((r) => {
      if(r.ok){
        r.json().then((resource) => dispatch(updateResource(resource)))
      } else (
        r.json().then((error) => console.log(error.error))
      )
    })
  };

  const online = () => {
    if(medicalResource.status === "Unassigned"){
      if(medicalResource.active){
        return(<button className="btn-small" onClick={onlineClick} >Take Offline</button>)
       }else{
        return(<button className="btn-small" onClick={onlineClick} >Bring Online</button>)
       }
    }
};

  const vehicleStatus = () => {
    if(medicalResource.status === 'Assigned'){
      return ('red lighten-3')
    }
    if(medicalResource.status === 'Enroute'){
      return ('yellow lighten-3')
    }
    if(medicalResource.status === 'Arrived'){
      return ('light-green lighten-3')
    }
  }

  // const modal = () => {
  //   return(<div id="modal1" class="modal">
  //     <div class="modal-content">
  //       <h4>Modal Header</h4>
  //       <p>A bunch of text</p>
  //     </div>
  //     <div class="modal-footer">
  //       <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
  //     </div>
  //   </div>)
  // };

  return(
    <tr>
      <td>{medicalResource.agency.name}</td>
      <td>{medicalResource.call_sign}</td>
      <td className={vehicleStatus()}>{medicalResource.status}</td>
      <td>{online()}</td>
    </tr>
  )
}

export default MedicalResources;