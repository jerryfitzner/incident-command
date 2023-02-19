import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadPersonnel } from "../../actions/personnel";
import User from "./User";

const Users = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPersonnel())
  }, []);



  return(
  <div className="App center-align">
    <h3>Personnel</h3>
    <div>
      <h5>🚒 Fire</h5>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Agency</th>
            <th>Position</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {<User/>}
        </tbody>
      </table>
    </div>
    <div>

    </div>
    <div>

    </div>
  </div>
  )
};

export default Users;