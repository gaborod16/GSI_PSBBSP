import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, ControlLabel, Row, Col} from 'react-bootstrap';

import Template from './template';

class MainPage extends Component {

  constructor() {
    super();
    this.state = {
      user: ''
    }
    
    this.redirectNewProject = this.redirectNewProject.bind(this);
    this.redirectProjectPage = this.redirectProjectPage.bind(this);
  }
    
  redirectNewProject() {
    this.props.history.push('./newProject')
  }
    
  redirectProjectPage() {
    this.props.history.push('./projectPage')
  }
   

  render() {
      
      var container_username={
          textAlign: "center",
          paddingTop: "0.1px"
      }
      
      var username = {
          fontSize: "25px",
          fontWeight: "normal",
          color: "white",
          opacity: "0.9"
      }
      
      var botao_new_bsp = {
          backgroundColor: "red",
          width: "70px",
          height: "70px",
          marginTop: "-60%",
          marginLeft: "10%",
          borderRadius: "100px",
          border: "1px solid white",
          backgroundColor: "#c3c3c9",
          textAlign: "center"
          
      }
      
      var plus ={
          fontSize: "35px",
          fontWeight: "lighter",
          color: "white",
          opacity: "0.9",
          marginTop: "10px"
      }
      
       var container_bsps ={
          
          height: "200px",
          width: "40%",
          border: "2px solid white",
          borderStyle: "dotted", 
          marginLeft: "32%",
          marginTop: "-9%",
          borderRadius: "15px",
           textAlign: "center"
     }
       
       var info_bsp={
          fontSize: "25px",
          fontWeight: "lighter",
          color: "white",
          opacity: "0.9",
           marginTop: "-13%",
           
       }
       
       var lista_bsps={
             borderRadius: "15px",
           textAlign: "center",
           backgroundColor: "#f8c97f",
           width: "80%",
           height: "20%",
          
           margin: "auto",
           textAlign: "center"
       }
      
       var project_text = {
             fontSize: "25px",
          fontWeight: "bold",
          color: "white",
          opacity: "0.9",
          
       }
       
    return (
      
      <Template>
        <Row> 
          <Col md={3} sm={4} onClick={this.redirectNewProject}>
            <h2> + <small>Create New Project</small></h2>
          </Col>

          <Col lg={6} md={7} sm={8}>
            <h2 className="center-text"> Your BSP Projects</h2>
            
            <Button bsStyle='warning' bsSize='medium' onClick={this.redirectProjectPage} block><h4>Project #1</h4></Button>
            <Button bsStyle='warning' bsSize='medium' onClick={this.redirectProjectPage} block><h4>Project #2</h4></Button>
            
          </Col>
        </Row>
      </Template>
       
       
    );
  }
}


export default MainPage;
