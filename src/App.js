import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing react component files
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

// OOB imports - Not needed, hence commenting
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    // <div className="App">
    <Router>
      {/* creating separate react components */}
      <div className='container'>
        <Navbar />
        <br/>
        <Route path="/" exact component = {ExercisesList} />
        <Route path="/edit/:id" exact component = {EditExercise} />
        <Route path="/create" exact component = {CreateExercise} />
        <Route path="/user" exact component = {CreateUser} />
      </div>
    </Router>





      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
    </div>*/
  );
}

export default App;
