import React from "react";
import Unit from "./Unit";

const Units = ({ units }) => {

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
        {units.map((ev) => <Unit key={ev.id} ev={ev} />)}
      </tbody>
    </table>
  </div>
  )
}

export default Units;