import React, { Component } from 'react';
import {PageHeader, Row, Col, Table, Glyphicon, Button, Modal, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

import Template from './template'
import CircleGroup from './circleGroup'
import ListTable from './listTable'
import ModalAdd from './modals'

const plus = 'assets/plus.png';

class ListOrganizationUnits extends Component {

  constructor() {
    super();
    this.state = {
      showModalAdd: false,
      showModalEdit: false,
      tempOU: ''
    };

    this.list = [{index: 1, name: 'CIO'}, {index: 2, name: 'CEO'}, {index: 3, name: 'HR'}];

    this.closeModal = this.closeModal.bind(this);
    this.openModalAdd = this.openModalAdd.bind(this);
    this.openModalEdit = this.openModalEdit.bind(this);

    this.onChangeOU = this.onChangeOU.bind(this);
    this.addOU = this.addOU.bind(this);
    this.editOU = this.editOU.bind(this);
    this.deleteOU = this.deleteOU.bind(this);

    this.redirectMainPage = this.redirectMainPage.bind(this);
  }
  
  closeModal() {
    this.setState({ showModal: false });
  }

  openModalAdd() {
    this.setState({ showModalAdd: true });
  }

  openModalEdit() {
    this.setState({ showModalEdit: true });
  }

  onChangeOU(e) {
    console.log(e.target.value);
    this.setState({tempOU: e.target.value});
  }

  addOU(e) {
    e.preventDefault();
    this.setState({ showModalAdd: false });
    console.log(this.state.tempOU);
  }

  editOU(e) {
    e.preventDefault();
    this.setState({ showModalEdit: false });
    console.log(this.state.tempOU);
  }

  deleteOU(e) {
    console.log(e.target);
  }
    
  redirectMainPage() {
    this.props.history.push('./')
  }
   
  render() {
    return (
      <Template history={this.props.history}>
        <Row>
          <h2 className="center-text"> Your Organization Units</h2>
        </Row>

        <Row>
          <ModalAdd 
            title="Add a New Organization Unit"
            entity="Organization Unit"
            showModal={this.state.showModalAdd} 
            cancelFunc={this.closeModal} 
            onChangeFunc={this.onChangeOU}
            submitFunc={this.addOU}
          />

          <ModalAdd 
            title="Edit your Organization Unit"
            entity="Organization Unit"
            showModal={this.state.showModalEdit} 
            cancelFunc={this.closeModal} 
            onChangeFunc={this.onChangeOU}
            submitFunc={this.editOU}
          />

          <Col md={3} sm={4}>
            <CircleGroup name="Add New Organization Unit" func={this.openModalAdd} image={plus}/>
          </Col>

          <Col lg={6} md={7} sm={8}>
            <ListTable 
              entityName="Organization Units" 
              data={this.list}
              editFunc={this.openModalEdit} 
              deleteFunc={this.deleteOU}
            />
          </Col>
        </Row>
      </Template>
    );
  }
}

export default ListOrganizationUnits;