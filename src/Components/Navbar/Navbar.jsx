import React, { Component } from 'react'
import './Navbar.css';
import { Link } from "@reach/router";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <a className="navbar-brand" href="./">
            <img src="./img/seec-logo.jpg" alt=""/>
          </a>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to='/add'>Add </Link>
            </li>
          </ul>
        </div>
        
      </div>
    )
  }
}
