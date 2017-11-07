import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, Image, ControlLabel, Col, Row} from 'react-bootstrap';

import TemplateSimple from './template-no-sidebar';
import Template from './template';

class NewProcess extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.redirectShowMatrix = this.redirectShowMatrix.bind(this);
  }

   redirectShowMatrix() {
    this.props.history.push('./ShowMatrix')
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

          <Col mdOffset={7} smOffset={5} md={2} sm={3} className="center-text">
            <p> Add Member </p>
            <hr/>
          </Col>
        </Row> 
        <Row> 
          <Col md={3} sm={4}>
            <h2 >  <small>Create New Process</small></h2>
          </Col>

          <Col md={7} sm={5}>
      <div className="processesdatacontainer">        
        <div className="processoslista">
        
          <div className="processoanddata">
             <FormGroup controlId="formProcess">
               Process#1
                <Col componentClass={ControlLabel} sm={2}>
                 
                </Col>
                <Col sm={8}>
                  <FormControl className="write"
                    type="text"
                    defaultValue=""
                    placeholder="Process Name"
                  />
                </Col>
                 <Col sm={8}>
                  <FormControl className="write" 
                    type="text"
                    defaultValue=""
                    placeholder="Description"
                  />
                </Col>
              </FormGroup>
            </div>
        
       
        
        
      
        
        
        </div>
         <div className="dataclasslista">
             <div className="processoanddata">
             <FormGroup controlId="formProcess">
                    Data Class #1
                <Col componentClass={ControlLabel} sm={2}>
                 
                </Col>
                <Col sm={8}>
                  <FormControl className="write"
                    type="text"
                    defaultValue=""
                    placeholder="Data Class Name"
                  />
                </Col>
                 <Col sm={8}>
                  <FormControl className="write" 
                    type="text"
                    defaultValue=""
                    placeholder="Description"
                  />
                </Col>
                
              
            </FormGroup>
         </div> 
        </div>
        
       </div>    
                <Col sm={2} md={3}>
                  <Button bsStyle='danger' bsSize='large'  block >
                    New
                  </Button>
                  <Button bsStyle='danger' bsSize='large'  block onClick={this.redirectShowMatrix} >
                    Save
                  </Button>
                </Col>
                <FormControl.Feedback />
             
              
          </Col>
          
          <Col md={2} sm={3} className="center-text">
            <p>List of members</p>
          </Col>
        </Row>
        
        
            
      </Template>
    );
  }
}
/*
function test(x){
    x = document.getElementsByClassName("testing");
    var string_teste = x.value;
    //window.alert(string_teste)
    console.log(string_teste);
    //window.alert("sss");
}
*/

export default NewProcess;