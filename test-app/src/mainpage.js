import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, ControlLabel, ButtonToolbar} from 'react-bootstrap';


import ReactDOM from "react-dom"


class Mainpage extends React.Component {
    
render() {
      //console.log("fyy");
    return (
        
     
            <h2> Isto só devia aparecer após o click no login </h2>
       
        
  
    );
    

  
//console.log("fyy");
  }
    
     
}


/*
class Tentativa extends React.Component{
    render(){
        return(
            <h2> Funciona  </h2>
        );
    }
} */

    const appl = document.getElementById('fy');
 ReactDOM.render(<Mainpage/>,appl);
export default Mainpage;
