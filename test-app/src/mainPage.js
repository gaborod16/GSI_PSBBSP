import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, ControlLabel, Row, Col, Image} from 'react-bootstrap';

import Template from './template';

const plus = 'assets/plus.png';
const lookup = 'assets/lookup.png';

class CircleGroup extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Row className="circle-create-row">
        <Col sm={4} md={2}>
          <Image src={this.props.image} circle className="circle-create-button" onClick={this.props.func}/>
        </Col>
        <Col sm={6} className="circle-create-text">
          <h5>{this.props.name}</h5>
        </Col>
      </Row>
    )
  }
}

class MainPage extends Component {

  constructor() {
    super();
    this.state = {
      user: ''
    }
    
    this.redirectNewProject = this.redirectNewProject.bind(this);
    this.redirectProjectPage = this.redirectProjectPage.bind(this);
  }
    
  redirectNewProject() {
    this.props.history.push('./newProject')
  }
    
  redirectProjectPage() {
    this.props.history.push('./projectPage')
  }
   

  render() {
    return (
      
      <Template history={this.props.history}>
        <Row>
          <Col md={3} sm={4} className="circle-create-col">
            <CircleGroup name="Create New Project" func={this.redirectNewProject} image={plus}/>
            <CircleGroup name="Add New Members" func={this.redirectNewProject} image={plus}/>
            <CircleGroup name="Organization Units" func={this.redirectNewProject} image={lookup}/>
            <CircleGroup name="Support Systems" func={this.redirectNewProject} image={lookup}/>
          </Col>

          <Col lg={6} md={7} sm={8}>
            <h2 className="center-text"> Your BSP Projects</h2>
            
            <Button bsStyle='warning' onClick={this.redirectProjectPage} block><h4>Project #1</h4></Button>
            <Button bsStyle='warning' onClick={this.redirectProjectPage} block><h4>Project #2</h4></Button>
            
          </Col>
        </Row>
      </Template>
       
       
    );
  }
}


export default MainPage;
