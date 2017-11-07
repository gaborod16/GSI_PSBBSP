import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, ControlLabel, Row, Col, Image} from 'react-bootstrap';

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
    return (
      
      <Template>
        <Row> 
          <Col md={3} sm={4}>
            <Col>
              <Image src="assets/plus.png" circle className="small-image" onClick={this.redirectNewProject}/>
            </Col>
            <Col>
              <h5>Create New Project</h5>
            </Col>
          </Col>

          <Col lg={6} md={7} sm={8}>
            <h2 className="center-text"> Your BSP Projects</h2>
            
            <Button bsStyle='warning' onClick={this.redirectProjectPage} block><h4>Project #1</h4></Button>
            <Button bsStyle='warning' onClick={this.redirectProjectPage} block><h4>Project #2</h4></Button>
            
          </Col>
        </Row>
      </Template>
       
       
    );
  }
}


export default MainPage;
