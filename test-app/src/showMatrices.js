import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, Image, ControlLabel, Col, Row, Table, MenuItem, ButtonGroup, DropdownButton} from 'react-bootstrap';

import Template from './template';
import YouSeeing from './youSeeing';


class Matrix extends Component {
  constructor(props) {
    super(props);
    this.state = {
    numChildren: 1,
    dropTitle: ""    
    }
    this.onPress = this.onPress.bind(this);
    console.log(this.props.gsi);
    console.log(this.props.type);  
  }
    
     onPress(){
       // this.setState({
       //      dropTitle: "wtf"
       //  });
    }

  render() {
      
       const choices = [];
      
    if( this.props.type == 1 ) {
         choices.length = 0;
      for (var i = 0; i < this.state.numChildren; i += 1) {
          choices.push(<MenuItem key={1} eventKey={1} onClick={this.onPress("A")}> A </MenuItem>);
          choices.push(<MenuItem key={2} eventKey={2} onClick={this.onPress("P")}> P </MenuItem>);
          choices.push(<MenuItem key={3} eventKey={3} onClick={this.onPress("A/P")}> A/P </MenuItem>);
          choices.push(<MenuItem key={4} eventKey={4} onClick={this.onPress("none")}> none </MenuItem>);
      };
    }
    
    if( this.props.type == 2 ) {
        choices.length = 0;
      for (var i = 0; i < this.state.numChildren; i += 1) {
          choices.push(<MenuItem key={1} eventKey={1} onClick={this.onPress("X")}> X </MenuItem>);
          choices.push(<MenuItem key={2} eventKey={2} onClick={this.onPress("none")}> none </MenuItem>);
          
      };
    }

    
   if( this.props.type == 3 ) {
       choices.length = 0;
      for (var i = 0; i < this.state.numChildren; i += 1) {
          choices.push(<MenuItem key={1} eventKey={1} onClick={this.onPress("D")}> D </MenuItem>);
          choices.push(<MenuItem key={2} eventKey={2} onClick={this.onPress("F")}> F </MenuItem>);
          choices.push(<MenuItem key={3} eventKey={3} onClick={this.onPress("A")}> A </MenuItem>);
          choices.push(<MenuItem key={4} eventKey={4} onClick={this.onPress("none")}> none </MenuItem>);
          
      };
    }

    if( this.props.type == 4 ) {
        choices.length = 0;
      for (var i = 0; i < this.state.numChildren; i += 1) {
          choices.push(<MenuItem key={1} eventKey={1} onClick={this.onPress("U")}> U </MenuItem>);
          choices.push(<MenuItem key={2} eventKey={2} onClick={this.onPress("C")}> C </MenuItem>);
          choices.push(<MenuItem key={3} eventKey={3} onClick={this.onPress("none")}> none </MenuItem>);
      };
    }
                    
                    
    return (
      <Table bordered responsive>
        
        <thead>
          <tr>
            <th className="tableHeader">{this.props.gsi}</th>
            <th className="tableHeader"> #1 </th>
            <th className="tableHeader"> #2 </th>
            <th className="tableHeader"> #3 </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tableHeader"> #1 </td>
            <td> <DropdownButton title={this.state.dropTitle} id="dropdown-size-small" block> {choices} </DropdownButton> </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="tableHeader"> #2 </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="tableHeader"> #3 </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

class ShowMatrices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      title: "Data Class/Process",
      novo: "Supp. System / Org. Unit",
      matrixType: 1    
     
    }
    this.onPressOne = this.onPressOne.bind(this);
    this.onPressTwo = this.onPressTwo.bind(this);
    this.onPressThree = this.onPressThree.bind(this);
    this.onPressFour = this.onPressFour.bind(this);  
  }


        
    onPressOne(){
        // this.setState({
        //     title: "Supp. System / Org. Unit",
        //     matrixType: 1        
        // });
    }
    
    onPressTwo(){
        // this.setState({
        //     title: "Supp. System / Data Class",
        //     matrixType: 2
        // });
    }
    
    onPressThree(){
        // this.setState({
        //     title: "Supp. System / Process",
        //     matrixType: 3
        // });
    }
    
    onPressFour(){
        // this.setState({
        //     title: "Data Class/Process",
        //     matrixType: 4
        // });
    }
    
    
    
  render() {
      return (
      <Template history={this.props.history}>
     
        <YouSeeing title={"The BSP Matrices"}/>

        <br/>

        <Row>
          <Col componentClass={ControlLabel} sm={2} md={2}>
            Select a matrix:
          </Col>
          <Col sm={9} md={6}>
            <ButtonGroup vertical block>
              <DropdownButton title={this.state.title} id="dropdown-size-medium" block>
                
                <MenuItem key={1} eventKey={1} onClick={this.onPressOne}>Support System VS Organization Unit</MenuItem>
                <MenuItem key={2} eventKey={2} onClick={this.onPressTwo}>Support System VS Data Class</MenuItem>
                <MenuItem key={3} eventKey={3} onClick={this.onPressThree}>Support System VS Process</MenuItem>
                <MenuItem key={4} eventKey={4} onClick={this.onPressFour}>Data Class VS Process</MenuItem>
              </DropdownButton>
            </ButtonGroup>
          </Col>
        </Row>

        <hr/>

        <Row>
          <Col sm={11} md={8}>
            <Matrix gsi={this.state.title} type={this.state.matrixType}/>
          </Col>
        </Row>
          
      </Template>
    );
  }
}

export default ShowMatrices;