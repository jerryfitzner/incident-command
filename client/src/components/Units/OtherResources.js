import { useDispatch } from "react-redux";
import { updateResource } from "../../actions/resource";
import React from "react";

const OtherResources = ({ otherResource }) => {
  const dispatch = useDispatch();

  const onlineClick = () => {
    fetch(`/emergency_vehicles/${otherResource.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "active" : !otherResource.active })
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
    if(otherResource.status === "Unassigned"){
      if(otherResource.active){
        return(<button className="btn-small" onClick={onlineClick} >Take Offline</button>)
       }else{
        return(<button className="btn-small" onClick={onlineClick} >Bring Online</button>)
       }
    }
};

  const vehicleStatus = () => {
    if(otherResource.status === 'Assigned'){
      return ('red lighten-3')
    }
    if(otherResource.status === 'Enroute'){
      return ('yellow lighten-3')
    }
    if(otherResource.status === 'Arrived'){
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
      <td>{otherResource.agency.name}</td>
      <td>{otherResource.call_sign}</td>
      <td className={vehicleStatus()}>{otherResource.status}</td>
      <td>{online()}</td>
    </tr>
  )
}

export default OtherResources;