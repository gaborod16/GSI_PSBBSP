import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, Image, ControlLabel, Col, Row, ListGroupItem, ListGroup} from 'react-bootstrap';

import Template from './template';
import CircleGroup from './circleGroup'
import YouSeeing from './youSeeing'
import EntityButton from './entityButton'
import ModalAddMember from './modalAddMember'
import ModalAddSubs from './modals'

const plus = 'assets/plus.png';
const lookup = 'assets/lookup.png';

class ProjectPage extends Component {

  constructor() {
    super();
    this.state = {
      user: '',
      showModalAddMember: false,
      showModalAddSubs: false,
      tempMemberIndex: -1,
      tempSubsytemName: ''
    }
    
    this.listUsers = ['James Bond', 'Albert Einstein', 'Winston Churchill', 'Peter Pan', 'Mickey Mouse'];
    this.projName = "My BSP Project";

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
    console.log(this.state.tempSubsytemName);
  }
    
  redirectNewProcess() {     
    this.props.history.push('./newProcess');
  }

  redirectNewDataClass() {     
    this.props.history.push('./newDataClass');
  }

  redirectSubsystemPage() {
    this.props.history.push('./subsystemPage');
  }

  redirectCheckMatrices() {
    this.props.history.push('./showMatrices');
  }

  redirectProblemsSolutions() {
    this.props.history.push('./problemsSolutions');
  }

  removeSubsystem(index) {
    return (e) => {
      console.log(index);
    }
  }

  getSubsystems() {
    let listSubsystems = [{name: 'Cluster de recursos', index: 1}, {name: 'Sistema de backups', index: 2}, {name: 'Sistema e monitorização', index: 3}];
    
    if (!listSubsystems) {
      return <h2><small> Nothing to show </small></h2>
    }
    else {
      return listSubsystems.map((subs) => 
        <EntityButton
          key={subs.index}
          title={subs.name}
          onClickFunc={this.redirectSubsystemPage}
          onClickRemoveFunc={this.removeSubsystem(subs.index)}
        />
      );
    }
  }
  
  render() {
    return (

      <Template history={this.props.history}>

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

        <YouSeeing title={"Project: " + this.projName}/>
        
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
              <ListGroupItem header="Team Leader">John Snow</ListGroupItem>
              <ListGroupItem header="Secretary">Sansa Stark</ListGroupItem>
              <ListGroupItem header="Member">Arya Stark</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Template>
    );
  }
}


export default ProjectPage;
