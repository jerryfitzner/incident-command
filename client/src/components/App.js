import { useState, useEffect } from "react";
import Navbar from "./Navbar";
// import { deleteUser } from "../actions/user";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/user";
// import { Route, Routes } from 'react-router-dom';
import { useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState(""); 
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((store) => console.log(store.user))

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => dispatch({}));
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userName, password);
    fetch('/login', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: userName, 
        password: password
      }),
    }).then((r) => {
      if(r.ok){
        r.json().then((user) => {
          dispatch(addUser(user));
          setUserName('');
          setPassword('');
        })
      }else{
        r.json().then(error => console.log(error))
      }
    });
  }

  
  

  return (
    <>
    <div>
      <Navbar />
    </div>
    <div className="App">
      <h1>Incident Command</h1>
      <div className="row">
        <form className="col s12" onSubmit={ handleSubmit }>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Placeholder" id="first_name" type="text" className="validate" value={ userName } onChange={ e => setUserName(e.target.value) }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Placeholder" id="first_name" type="text" className="validate" value={ password } onChange={ e => setPassword(e.target.value) }/>
              {/* <label >First Name</label> */}
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="submit">Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
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