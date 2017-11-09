import React, { Component } from 'react';
import {PageHeader, Row, Col, Table, Glyphicon, Button, Modal, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

import Template from './template'
import CircleGroup from './circleGroup'
import ListTable from './listTable'
import ModalAdd from './modals'

const plus = 'assets/plus.png';

class ListSupportSystems extends Component {

  constructor() {
    super();
    this.state = {
      showModalAdd: false,
      showModalEdit: false,
      tempSS: ''
    };

    this.list = [{index: 1, name: 'Web Server'}, {index: 2, name: 'Database'}, {index: 3, name: 'Cloud Server'}];

    this.closeModal = this.closeModal.bind(this);
    this.openModalAdd = this.openModalAdd.bind(this);
    this.openModalEdit = this.openModalEdit.bind(this);

    this.onChangeSS = this.onChangeSS.bind(this);
    this.addSS = this.addSS.bind(this);
    this.editSS = this.editSS.bind(this);
    this.deleteSS = this.deleteSS.bind(this);

    this.redirectMainPage = this.redirectMainPage.bind(this);
  }
  
  closeModal() {
    this.setState({ showModalAdd: false, showModalEdit: false });
  }

  openModalAdd() {
    this.setState({ showModalAdd: true });
  }

  openModalEdit() {
    this.setState({ showModalEdit: true });
  }

  onChangeSS(e) {
    console.log(e.target.value);
    this.setState({tempSS: e.target.value});
  }

  addSS(e) {
    e.preventDefault();
    this.setState({ showModalAdd: false });
    console.log(this.state.tempSS);
  }

  editSS(e) {
    e.preventDefault();
    this.setState({ showModalEdit: false });
    console.log(this.state.tempSS);
  }

  deleteSS(e) {
    console.log(e.target);
  }
    
  redirectMainPage() {
    this.props.history.push('./')
  }
   
  render() {
    return (
      <Template history={this.props.history}>
        <Row>
          <h2 className="center-text"> Your support systems</h2>
        </Row>

        <Row>
          <ModalAdd 
            title="Add a New Support System"
            entity="Support System"
            showModal={this.state.showModalAdd} 
            cancelFunc={this.closeModal} 
            onChangeFunc={this.onChangeSS}
            submitFunc={this.addSS}
          />

          <ModalAdd 
            title="Edit your Support System"
            entity="Support System"
            showModal={this.state.showModalEdit} 
            cancelFunc={this.closeModal} 
            onChangeFunc={this.onChangeSS}
            submitFunc={this.editSS}
          />

          <Col md={3} sm={4}>
            <CircleGroup name="Add New Support System" func={this.openModalAdd} image={plus}/>
          </Col>

          <Col lg={6} md={7} sm={8}>
            <ListTable 
              entityName="Support Systems" 
              data={this.list}
              editFunc={this.openModalEdit} 
              deleteFunc={this.deleteSS}
            />
          </Col>
        </Row>
      </Template>
    );
  }
}

export default ListSupportSystems;
