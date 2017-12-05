import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

import * as path from './paths';

import Template from './template';
import CircleGroup from './circleGroup'
import YouSeeing from './youSeeing'
import EntityButton from './entityButton'

import * as CRUD from './CRUD';

const plus = '/assets/plus.png';
const lookup = '/assets/lookup.png';

class MainPage extends Component {

  constructor() {
    super();

    var user = CRUD.getUser();

    this.state = {
      email: user.email,
      role: '----',
      projects: CRUD.getProjects()
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

  redirectEditProject(pid) {
    this.props.history.push('./edit_project/' + pid)
  }

  redirectRegister() {
    this.props.history.push(path.REGISTER)
  }
    
  redirectProjectPage(pid) {
    this.props.history.push('./project/' + pid + '/')
  }

  redirectOUsPage() {
    this.props.history.push('./listOrganizationUnits')
  }

  redirectSSsPage() {
    this.props.history.push('./listSupportSystems')
  }

  selectProject(pid) {
    return (e) => {
      this.redirectProjectPage(pid);
      console.log(pid);
    };
  }

  editProject(pid) {
    return (e) => {
      this.redirectEditProject(pid);
      console.log(pid);
    };
  }

  removeProject(pid) {
    return (e) => {
      console.log(pid);
      CRUD.removeProject(pid);
      this.forceUpdate();
    }
  }

  getProjects() {
    return this.state.projects.map((proj) => 
      <EntityButton
        key={proj.id}
        title={proj.name}
        onClickFunc={this.selectProject(proj.id)}
        onClickEditFunc={this.editProject(proj.id)}
        onClickRemoveFunc={this.removeProject(proj.id)}
      />
    );
  }

  render() {
    return (
      
      <Template history={this.props.history} email={this.state.email} role={this.state.role}>
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
