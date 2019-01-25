import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Candidate from './Components/Candidate/Candidate';
import { Router, Link } from "@reach/router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">candidate Management </h1>
        <Navbar></Navbar>
        <Router>
          <Candidate path='/add'></Candidate>
        </Router>
        
      </div>
    );
  }
}

export default App;
