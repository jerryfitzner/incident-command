import React, { useEffect } from "react";
import { addUser } from "../actions/user";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import About from "./About";
import Users from "./Users/Users";
import Resources from "./Units/Resources";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => (store.user));

  useEffect(() => {
    fetch('/me').then((r) => {
      if(r.ok){
        r.json().then(user => {
          dispatch(addUser(user))
        })
      }
    });
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container">
        {user ? (
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/personnel" element={ <Users/> } />
            <Route path="/resources" element={ <Resources/> } />
            <Route path="*" element={ <Home/> } />
          </Routes>
        ):(
          <Routes>
            <Route path="/about" element={ <About/> } />
            <Route path="/" element={ <Login/> } />
            <Route path="/signup" element={ <Signup/> } />
            <Route path="*" element={ <Login/> } />
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;