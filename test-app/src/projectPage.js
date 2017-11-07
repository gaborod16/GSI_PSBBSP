import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, Image, ControlLabel, Col, Row} from 'react-bootstrap';

import Template from './template';

class ProjectPage extends Component {

  constructor() {
    super();
    this.state = {
      user: ''
    }
    
       this.redirectNewProcess = this.redirectNewProcess.bind(this);
  }
    
    redirectNewProcess() {     
    this.props.history.push('./NewProcess')
  }
  
  render() {
        var seeing ={
          fontSize: "18px",
          fontWeight: "lighter",
          opacity: "0.9",
          
      }
        
         var proj_name ={
          fontSize: "30px",
          fontWeight: "bold",
          opacity: "1",
          marginTop: "-10px"
          
      }
      
    return (
        
      <Template history={this.props.history}>
        <Row>   
          <Col md={3} sm={4}>
            <p style={seeing}> You're seeing  </p>
            <h2 style={proj_name}> Project #x  </h2>
          </Col>

          <Col mdOffset={7} smOffset={5} md={2} sm={3} className="center-text">
            <p> Add Member </p>
            <hr/>
          </Col>
        </Row> 
        <Row> 
          <Col md={3} sm={4}>
            <h2 onClick={this.redirectNewProcess} > + <small>Create New Process</small></h2>
          </Col>

          <Col md={7} sm={5}>
            <h2><small> Nothing to show </small></h2>
          </Col>

          <Col md={2} sm={3} className="center-text">
            <p>List of members</p>
          </Col>
        </Row>
            
      </Template>
    );
  }
}


export default ProjectPage;
