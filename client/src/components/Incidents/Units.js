import React from "react";

const Units = ({ units }) => {

  const unit = units.map((ev) => {
    const vehicleImage = () => {
      if(ev.agency.emergency_service === 'Fire'){
        return(`🚒  ${ev.agency.name}`)
      }else if(ev.agency.emergency_service === 'Medical'){
        return (`🚑  ${ev.agency.name}`)
      }else if(ev.agency.emergency_service === 'Police'){
        return (`🚓  ${ev.agency.name}`)
      }else{
        return (`⚝  ${ev.agency.name}`)
      }
    };

    const vehicleStatus = () => {
      if(ev.status === 'Assigned'){
        return ('red lighten-3')
      }
      if(ev.status === 'Enroute'){
        return ('yellow lighten-3')
      }
      if(ev.status === 'Arrived'){
        return ('light-green lighten-3')
      }
    }


    return(
    <tr key={ev.id}>
      <td>{vehicleImage()}</td>
      <td>{ev.call_sign}</td>
      <td className={vehicleStatus()}>{ev.status}</td>
    </tr>
    )
  })



  return(
  <div>
    <table className="centered">
      <thead>
        <tr>
          <th>Agency</th>
          <th>Unit #</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {unit}
      </tbody>
    </table>
  </div>
  )
}

export default Units;