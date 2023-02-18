import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { deleteUser } from "../actions/user";


const Navbar = () => {
  const user = useSelector((store) => (store.user));
  const dispatch = useDispatch();

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE'
    }).then((r) => {
      if(r.ok){
        dispatch(deleteUser())
      }else{
        r.json().then((error) => console.log(error.error))
      }
    })
  }

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <NavLink to="/">Logo</NavLink>
          {user ? (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/resources">Resources</NavLink></li>
            <li><NavLink to="/signin" onClick={handleLogout}>Logout</NavLink></li>
          </ul>
          ):(
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/signin">Sign In</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
          </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;