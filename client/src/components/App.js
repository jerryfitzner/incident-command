import { useState, useEffect } from "react";
// import { deleteUser } from "../actions/user";
// import { useDispatch } from "react-redux";
// import { Route, Routes } from 'react-router-dom';
// import { useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => dispatch({}));
  // }, []);

  
  

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
      <h1>Hello</h1>
    </div>
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