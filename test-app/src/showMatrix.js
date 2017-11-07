import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, Image, ControlLabel, Col, Row} from 'react-bootstrap';

import TemplateSimple from './template-no-sidebar';
import Template from './template';
import classNames from 'classnames';





class ShowMatrix extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.state = {
        color_black: true
      }
  }

    changeColor(){
            this.setState({color_black: !this.state.color_black})
    }

    
     

  render() {
      
      let bgColor = this.state.color_black ? "white" : "red"
      
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
    <div>    
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
            <h2 >  <small>Processes/Data Classes Matrix</small></h2>
          </Col>

          <Col md={7} sm={5}>

            <table className="tabela">
                <tr>
                  <th>Processes \ Data Classes</th>
                  {/*listar as data classes nos th que se seguem*/}
                  <th>Data Class #1</th> 
                  <th>Data Class #2</th>
                  <th>Data Class #3</th>
               </tr>
               <tr>
                  {/*linha de cada process*/}
                  <th>Process #1</th>
                  <td style={{backgroundColor: bgColor}} onClick={this.changeColor.bind(this)}>x</td>
                  <td style={{backgroundColor: bgColor}} onClick={this.changeColor.bind(this)}></td>
                  <td ></td>
               </tr>
               <tr>
                  <th>Process #2</th>
                  <td></td>
                  <td></td>
                  <td>x</td>
               </tr>
               <tr>
                  <th>Process #3</th>
                  <td></td>
                  <td>x</td>
                  <td></td>
               </tr>
        
           </table>

          </Col>
          
          <Col md={2} sm={3} className="center-text">
            <p>List of members</p>
          </Col>
            
            
        </Row>
        
        
          
      </Template>
         
 </div>  
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

export default ShowMatrix;
