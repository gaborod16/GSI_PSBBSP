import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, ControlLabel, Row, Col, Image} from 'react-bootstrap';

import * as path from './paths';

import Template from './template';
import CircleGroup from './circleGroup'
import YouSeeing from './youSeeing'
import EntityButton from './entityButton'

const plus = 'assets/plus.png';
const lookup = 'assets/lookup.png';

class MainPage extends Component {

  constructor() {
    super();
    this.state = {
      user: ''
    }
    
    this.redirectNewProject = this.redirectNewProject.bind(this);
    this.redirectEditProject = this.redirectEditProject.bind(this);
    this.redirectRegister = this.redirectRegister.bind(this);
    this.redirectProjectPage = this.redirectProjectPage.bind(this);
    this.redirectOUsPage = this.redirectOUsPage.bind(this);
    this.redirectSSsPage = this.redirectSSsPage.bind(this);
    this.editProject = this.editProject.bind(this);
    this.removeProject = this.removeProject.bind(this);
    this.getProjects = this.getProjects.bind(this);
  }
    
  redirectNewProject() {
    this.props.history.push(path.NEW_PROJECT)
  }

  redirectEditProject(index) {
    this.props.history.push('./project/' + index)
  }

  redirectRegister() {
    this.props.history.push(path.REGISTER)
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

  editProject(index) {
    return (e) => {
      this.redirectEditProject(index);
      console.log(index);
      
    };
  }

  removeProject(index) {
    return (e) => {
      console.log(index);
    }
  }

  getProjects() {
    let listProjects = [{name: 'My first BSP', index: 1}, {name: 'My second BSP', index: 2}, {name: 'BSP test', index: 3}];
    return listProjects.map((proj) => 
      <EntityButton
        key={proj.index}
        title={proj.name}
        onClickFunc={this.redirectProjectPage}
        onClickEditFunc={this.editProject(proj.index)}
        onClickRemoveFunc={this.removeProject(proj.index)}
      />
    );
  }

  render() {
    return (
      
      <Template history={this.props.history}>
        <YouSeeing title="Your BSP Projects"/>
        <Row>
          <Col md={3} sm={4} className="circle-create-col">
            <CircleGroup name="Create New Project" func={this.redirectNewProject} image={plus}/>
            <CircleGroup name="Add New User" func={this.redirectRegister} image={plus}/>
            <CircleGroup name="Organization Units" func={this.redirectOUsPage} image={lookup}/>
            <CircleGroup name="Support Systems" func={this.redirectSSsPage} image={lookup}/>
          </Col>

          <Col lg={6} md={7} sm={8}>
            {this.getProjects()}
          </Col>
        </Row>
      </Template>
       
       
    );
  }
}


export default MainPage;
