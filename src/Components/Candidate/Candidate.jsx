import React, { Component } from 'react'
import './Candidate.css';
export default class Candidate extends Component {
  render() {
    return (
      <div className='candidate'>
        <div className="container">
            <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 avatar">
                    <img src="" alt="Avatar"/> 
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    Info
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    Edit
                </div>
            </div>
            <div className="row detail">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    Detail
                </div>
                
            </div>
        </div>
      </div>
    )
  }
}
