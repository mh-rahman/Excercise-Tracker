import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";


// Importing react component files
// import Navbar from "./components/navbar.component";
import AppNavBar from "./components/AppNavbar";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

// OOB imports - Not needed, hence commenting
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          {/* <h3>hello</h3> */}
          <AppNavBar />
          {/* <br/> */}
          <Route path="/" exact component = {ExercisesList} />
          <Route path="/edit/:id" exact component = {EditExercise} />
          <Route path="/create" exact component = {CreateExercise} />
          <Route path="/user" exact component = {CreateUser} />
        </div>
      </Router>
      
    );
  }
}

export default App;
