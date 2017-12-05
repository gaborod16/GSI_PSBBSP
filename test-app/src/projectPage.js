import React, { Component } from 'react';
import {Col, Row, ListGroupItem, ListGroup} from 'react-bootstrap';

import Template from './template';
import CircleGroup from './circleGroup'
import YouSeeing from './youSeeing'
import EntityButton from './entityButton'
import ModalAddMember from './modalAddMember'
import ModalAddSubs from './modals'

import * as CRUD from './CRUD';

const plus = '/assets/plus.png';
const lookup = '/assets/lookup.png';

class ProjectPage extends Component {

  constructor(props) {
    super(props);

    var user = CRUD.getUser();
    this.projId = this.props.match.params.proj_id;
    this.project = CRUD.getProject(this.projId);
    this.secretary = CRUD.findUser(this.project.secretary);
    this.teamLeader = CRUD.findUser(this.project.team_leader);
    this.members = this.project.members.map((mid) => CRUD.findUser(mid));
    this.subsystems = CRUD.getSubsystems(this.project.id);

    console.log(this);

    this.state = {
      showModalAddMember: false,
      showModalAddSubs: false,
      tempMemberIndex: -1,
      tempSubsytemName: '',
      email: user.email,
      role: '----'
    }
    
    this.listUsers = CRUD.getUsersInOrgNotProj(this.projId);

    this.redirectNewProcess = this.redirectNewProcess.bind(this);
    this.redirectNewDataClass = this.redirectNewDataClass.bind(this);
    this.redirectSubsystemPage = this.redirectSubsystemPage.bind(this);
    this.redirectCheckMatrices = this.redirectCheckMatrices.bind(this);
    this.redirectProblemsSolutions = this.redirectProblemsSolutions.bind(this);
    this.openModalAddMember = this.openModalAddMember.bind(this);
    this.closeModalAddMember = this.closeModalAddMember.bind(this);
    this.openModalAddSubs = this.openModalAddSubs.bind(this);
    this.closeModalAddSubs = this.closeModalAddSubs.bind(this);
    this.onSelectMember = this.onSelectMember.bind(this);
    this.onChangeSubsystem = this.onChangeSubsystem.bind(this);
    this.addNewMember = this.addNewMember.bind(this);
    this.addNewSubsystem = this.addNewSubsystem.bind(this);
    this.removeSubsystem = this.removeSubsystem.bind(this);
    this.getSubsystems = this.getSubsystems.bind(this);
    this.selectSubsystem = this.selectSubsystem.bind(this);
  }

  closeModalAddMember() {
    this.setState({ showModalAddMember: false });
  }

  closeModalAddSubs() {
    this.setState({ showModalAddSubs: false });
  }

  openModalAddMember() {
    this.setState({ showModalAddMember: true });
  }

  openModalAddSubs() {
    this.setState({ showModalAddSubs: true });
  }

  onSelectMember(index) {
    console.log(index);
    this.setState({tempMemberIndex: index});
  }

  onChangeSubsystem(e) {
    console.log(e.target.value);
    this.setState({tempSubsytemName: e.target.value});
  }

  addNewMember(e) {
    e.preventDefault();
    this.setState({ showModalAddMember: false });
    console.log(this.state.tempMemberIndex);
  }

  addNewSubsystem(e) {
    e.preventDefault();
    this.setState({ showModalAddSubs: false });
    if (this.state.tempSubsytemName) {
      CRUD.createSubsystem(this.projId, this.state.tempSubsytemName);
    }
    console.log(this.state.tempSubsytemName);
  }
    
  redirectNewProcess() {     
    this.props.history.push('./newProcess/');
  }

  redirectNewDataClass() {     
    this.props.history.push('./newDataClass/');
  }

  redirectSubsystemPage(sid) {
    this.props.history.push('./subsystemPage/' + sid);
  }

  redirectCheckMatrices() {
    this.props.history.push('./showMatrices/');
  }

  redirectProblemsSolutions() {
    this.props.history.push('./problemsSolutions/');
  }

  removeSubsystem(index) {
    return (e) => {
      console.log(index);
    }
  }

  selectSubsystem(sid) {
    return (e) => {
      this.redirectSubsystemPage(sid);
      console.log(sid);
    };
  }

  getSubsystems() {
    if (!this.subsystems) {
      return <h2><small> Nothing to show </small></h2>
    }
    else {
      return this.subsystems.map((subs) => 
        <EntityButton
          key={subs.id}
          title={subs.name}
          onClickFunc={this.selectSubsystem(subs.id)}
          onClickRemoveFunc={this.removeSubsystem(subs.id)}
        />
      );
    }
  }
  
  render() {
    return (

      <Template history={this.props.history} email={this.state.email} role={this.state.role}>

        <ModalAddMember 
          title="Add a New Member to the Project"
          entity="Add New Member"
          listUsers={this.listUsers}
          showModal={this.state.showModalAddMember} 
          cancelFunc={this.closeModalAddMember} 
          onSelectFunc={this.onSelectMember}
          submitFunc={this.addNewMember}
        />

        <ModalAddSubs 
          title="Add a New Subsystem"
          entity="Subsystem"
          showModal={this.state.showModalAddSubs} 
          cancelFunc={this.closeModalAddSubs} 
          onChangeFunc={this.onChangeSubsystem}
          submitFunc={this.addNewSubsystem}
        />

        <YouSeeing title={"Project: " + this.project.name}/>
        
        <Row>
          <Col md={3} sm={4} className="circle-create-col">
            <CircleGroup name="Add Member" func={this.openModalAddMember} image={plus}/>
            <CircleGroup name="Create New Process" func={this.redirectNewProcess} image={plus}/>
            <CircleGroup name="Create New Data Class" func={this.redirectNewDataClass} image={plus}/>
            <CircleGroup name="Create New Subsystem" func={this.openModalAddSubs} image={plus}/>
            <CircleGroup name="Check BSP Matrices" func={this.redirectCheckMatrices} image={lookup}/>
            <CircleGroup name="Check Problems and Solutions" func={this.redirectProblemsSolutions} image={lookup}/>
          </Col>

          <Col md={6} sm={4} className="center-text">
            {this.getSubsystems()}
          </Col>

          <Col md={3} sm={4} className="center-text">
            <ListGroup>
              <ListGroupItem disabled>List of members</ListGroupItem>
              <ListGroupItem header="Team Leader">{this.teamLeader.email}</ListGroupItem>
              <ListGroupItem header="Secretary">{this.secretary.email}</ListGroupItem>
              <ListGroupItem header="Member">{this.members.map((m) => m.email)}</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Template>
    );
  }
}


export default ProjectPage;
