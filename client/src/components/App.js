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
import Resources from "./Resources";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => (store.user));

  useEffect(() => {
    fetch('/me').then((r) => {
      if(r.ok){
        r.json().then(user => dispatch(addUser(user)))
      }
    });
  }, []);

  // user ? console.log(user) : console.log("Logged Out");

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


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// const user = useSelector((store) => store)

  // const userCard = user.map((user, idx) => <UserCard key={idx} user={ user })

  // Adding information by dispatching to the reducer. 

  // import { useDispatch } from "react-redux";

  // const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(addUser({name, content}));
  //   setName("");
  //   setContent("");
  // }

  // const handleDelete = (e) => {
  //   // dispatch action to reducer to remove from store state
  //   // start with action in user.js
  //   // import { deleteUser } from '../../actions/user
  //   // import { useDispatch } from "react-redux";
  //   // const dispatch = useDispatch();
    
  //   // dispatch(deleteUser(user))

  //   // go to the reducer (userreducer) and add the case statement
  // }