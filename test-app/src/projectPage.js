import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, Image, ControlLabel, Col, Row, ListGroupItem, ListGroup} from 'react-bootstrap';

import Template from './template';
import CircleGroup from './circleGroup'
import YouSeeing from './youSeeing'
import EntityButton from './entityButton'
import ModalAddMember from './modalAddMember'

const plus = 'assets/plus.png';
const lookup = 'assets/lookup.png';

class ProjectPage extends Component {

  constructor() {
    super();
    this.state = {
      user: '',
      showModal: false,
      tempMemberIndex: -1
    }
    
    this.listUsers = ['James Bond', 'Albert Einstein', 'Winston Churchill', 'Peter Pan', 'Mickey Mouse'];
    this.projName = "My BSP Project";
    this.redirectNewProcess = this.redirectNewProcess.bind(this);
    this.redirectNewDataClass = this.redirectNewDataClass.bind(this);
    this.redirectSubsystemPage = this.redirectSubsystemPage.bind(this);
    this.redirectCheckMatrices = this.redirectCheckMatrices.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onSelectMember = this.onSelectMember.bind(this);
    this.addNewMember = this.addNewMember.bind(this);
    this.removeSubsystem = this.removeSubsystem.bind(this);
    this.getSubsystems = this.getSubsystems.bind(this);
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ showModal: true });
  }

  onSelectMember(index) {
    console.log(index);
    this.setState({tempMemberIndex: index});
  }

  addNewMember(e) {
    e.preventDefault();
    this.setState({ showModal: false });
    console.log(this.state.tempMemberIndex);
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
          showModal={this.state.showModal} 
          cancelFunc={this.closeModal} 
          onSelectFunc={this.onSelectMember}
          submitFunc={this.addNewMember}
        />

        <YouSeeing title={"Project: " + this.projName}/>
        
        <Row>
          <Col md={3} sm={4} className="circle-create-col">
            <CircleGroup name="Add Member" func={this.openModal} image={plus}/>
            <CircleGroup name="Create New Process" func={this.redirectNewProcess} image={plus}/>
            <CircleGroup name="Create New Data Class" func={this.redirectNewDataClass} image={plus}/>
            <CircleGroup name="Check BSP Matrices" func={this.redirectCheckMatrices} image={lookup}/>
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
