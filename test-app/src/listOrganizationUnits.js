import React, { Component } from 'react';
import {PageHeader, Row, Col, Table, Glyphicon, Button, Modal, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

import Template from './template'
import CircleGroup from './circleGroup'

const plus = 'assets/plus.png';

class ListTableLine extends Component {
  constructor() {
    super();
    this.state={};
  }

  render() {
    return (
      <tr>
        <td>{this.props.position}</td>
        <td>{this.props.name}</td>
        <td>
          <Col sm={6}>
            <Glyphicon glyph="pencil" className="yellow" />
          </Col>
          <Col sm={6}>
            <Glyphicon glyph="remove" className="red" />
          </Col>
        </td>
      </tr>
    )
  }
}

class ListOrganizationUnits extends Component {

  constructor() {
    super();
    this.state = {showModal: false};
    this.redirectMainPage = this.redirectMainPage.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.updateTempOU = this.updateTempOU.bind(this);
    this.addOrganizationUnit = this.addOrganizationUnit.bind(this);
  }
  
  closeModal() {
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ showModal: true });
  }

  updateTempOU(e) {
    console.log(e.target.value);
    this.setState({tempOU: e.target.value});
  }

  addOrganizationUnit(e) {
    e.preventDefault();
    this.setState({ showModal: false });
    console.log("Use updated value");
  }
    
  redirectMainPage() {
    this.props.history.push('./')
  }
   
  render() {
    return (
      <Template history={this.props.history}>
        <Row>
          <h2 className="center-text"> Your BSP Projects</h2>
        </Row>

        <Row>
          <ModalAdd 
            title="Add a New Organization Unit"
            entity="Organization Unit"
            showModal={this.state.showModal} 
            cancelFunc={this.closeModal} 
            onChangeFunc={this.updateTempOU}
            submitFunc={this.addOrganizationUnit}
          />

          <Col md={3} sm={4}>
            <CircleGroup name="Add New Organization Unit" func={this.openModal} image={plus}/>
          </Col>

          <Col lg={6} md={7} sm={8}>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Organization Unit</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <ListTableLine position="1" name="CIO"/>
                <ListTableLine position="2" name="CEO"/>
                <ListTableLine position="3" name="Head of Human Resources"/>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Template>
    );
  }
}

const ModalAdd = ({title, entity, showModal, cancelFunc, onChangeFunc, submitFunc}) => (

  <Modal show={showModal} onHide={cancelFunc}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form horizontal onSubmit={submitFunc}>
        <FormGroup controlId="formOU">
          <Col componentClass={ControlLabel} sm={3}>
            {entity}
          </Col>
          <Col sm={9}>
            <FormControl 
              type="text"
              defaultValue=""
              placeholder={"Enter " + entity}
              onChange={onChangeFunc}
            />
          </Col>
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup>

          <Col smOffset={6} sm={3}>
            <Button type="submit" onClick={cancelFunc} block>
              Cancel
            </Button>
          </Col>
          <Col sm={3}>
            <Button type="submit" bsStyle='danger' block>
              Add
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Modal.Body>
  </Modal>
);



export default ListOrganizationUnits;
