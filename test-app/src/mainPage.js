import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, ControlLabel, Row, Col, Image} from 'react-bootstrap';

import Template from './template';
import CircleGroup from './circleGroup'

const plus = 'assets/plus.png';
const lookup = 'assets/lookup.png';

class MainPage extends Component {

  constructor() {
    super();
    this.state = {
      user: ''
    }
    
    this.redirectNewProject = this.redirectNewProject.bind(this);
    this.redirectRegister = this.redirectRegister.bind(this);
    this.redirectProjectPage = this.redirectProjectPage.bind(this);
    this.redirectOUsPage = this.redirectOUsPage.bind(this);
    this.redirectSSsPage = this.redirectSSsPage.bind(this);
  }
    
  redirectNewProject() {
    this.props.history.push('./newProject')
  }

  redirectRegister() {
    this.props.history.push('./register')
  }
    
  redirectProjectPage() {
    this.props.history.push('./projectPage')
  }

  redirectOUsPage() {
    this.props.history.push('./listOrganizationUnits')
  }

  redirectSSsPage() {
    this.props.history.push('./listSupportSystems')
  }

  render() {
    return (
      
      <Template history={this.props.history}>
        <Row>
          <h2 className="center-text"> Your BSP Projects</h2>
        </Row>
        <Row>
          <Col md={3} sm={4} className="circle-create-col">
            <CircleGroup name="Create New Project" func={this.redirectNewProject} image={plus}/>
            <CircleGroup name="Add New Members" func={this.redirectRegister} image={plus}/>
            <CircleGroup name="Organization Units" func={this.redirectOUsPage} image={lookup}/>
            <CircleGroup name="Support Systems" func={this.redirectSSsPage} image={lookup}/>
          </Col>

          <Col lg={6} md={7} sm={8}>
            <Button bsStyle='warning' onClick={this.redirectProjectPage} block><h4>Project #1</h4></Button>
            <Button bsStyle='warning' onClick={this.redirectProjectPage} block><h4>Project #2</h4></Button>
          </Col>
        </Row>
      </Template>
       
       
    );
  }
}


export default MainPage;
