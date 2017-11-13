import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, Image, ControlLabel, Col, Row, Modal,Table, Glyphicon, Form} from 'react-bootstrap';

import TemplateSimple from './template-no-sidebar';
import Template from './template';
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
        <td>{this.props.description}</td>
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

class NewDataClass extends Component {

    constructor() {
    super();
    this.state = {showModal: false};
    this.redirectMainPage = this.redirectMainPage.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.updateTempOU = this.updateTempOU.bind(this);
    this.addNewDataClass = this.addNewDataClass.bind(this);
    this.redirectProjectPage = this.redirectProjectPage.bind(this);    
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

  addNewDataClass(e) {
    e.preventDefault();
    this.setState({ showModal: false });
    console.log("Use updated value");
  }
    
  redirectMainPage() {
    this.props.history.push('./')
  }
    redirectProjectPage() {     
    this.props.history.push('./projectPage')
  }

  render() {
      
      var seeing ={
          fontSize: "18px",
          fontWeight: "lighter",
          opacity: "0.9",
          
      }
        
         var proj_name ={
          fontSize: "30px",
          fontWeight: "bold",
          opacity: "1",
          marginTop: "-10px"
          
      }
         
    return (
      <Template>
        <Row>   
          <Col md={3} sm={4}>
            <p style={seeing}> You're seeing  </p>
            <h2 style={proj_name}> Project #x  </h2>
          </Col>

          
        </Row> 
        <Row> 
          <Col md={3} sm={4}>
            <h2 >  <small>Create New Data Class</small></h2>
          </Col>

          <Col md={7} sm={5}>
             <FormGroup controlId="formProcess">
                    <Row>
          <ModalAdd 
            title="Add a New Data Class"
            entity="Data Class Name"
            entitytwo="Description"
            showModal={this.state.showModal} 
            cancelFunc={this.closeModal} 
            onChangeFunc={this.updateTempOU}
            submitFunc={this.addNewDataClass}
          />

          
          <Col lg={11} md={7} sm={8}>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Data Class Name</th>
                  <th>Data Class Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <ListTableLine position="1" name="Something" description="This is the description"/>
                <ListTableLine position="2" name="Something" description="This is the description"/>
                <ListTableLine position="3" name="Something" description="This is the description"/>
              </tbody>
            </Table>
          </Col>
        </Row>
               <Col md={5} sm={12}>
                 <CircleGroup name="Add New Process" func={this.openModal} image={plus}/>
               </Col>
               <Col md={10} sm={12}>
                 <Button bsStyle='danger' bsSize='large'  block onClick={this.redirectProjectPage}>
                    Return
                 </Button>
              </Col>
            <FormControl.Feedback />
           </FormGroup>
        </Col>
          
          
        </Row>
        
        
            
      </Template>
    );
  }
}

const ModalAdd = ({title, entity, entitytwo, showModal, cancelFunc, onChangeFunc, submitFunc}) => (

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
    <Col componentClass={ControlLabel} sm={3}>
            {entitytwo}
          </Col>
          <Col sm={9}>
            <FormControl 
              type="text"
              defaultValue=""
              placeholder={"Enter " + entitytwo}
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
/*
function test(x){
    x = document.getElementsByClassName("testing");
    var string_teste = x.value;
    //window.alert(string_teste)
    console.log(string_teste);
    //window.alert("sss");
}
*/

export default NewDataClass;