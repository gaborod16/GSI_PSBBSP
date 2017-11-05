/*
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

/*

    const appl = document.getElementById('root');
 ReactDOM.render(<Mainpage/>,appl);
export default Mainpage;
*/

import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class ProjectPage extends Component {

  constructor() {
    super();
    this.state = {
      user: ''
    }
    
       
  }
    
    
   

  render() {

       var estilo_menu ={
          
          height: "500px",
          width: "30%",
          backgroundColor: "#f04f57",
          marginLeft: "-34%",
          marginTop: "3%",
          borderRadius: "15px"
     }
      
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
          
          width: "70px",
          height: "70px",
          marginTop: "-50%",
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
      
       var container_projname ={
         
           marginTop: "-30%",
           width: "30%"
      }
       
        var seeing ={
          fontSize: "18px",
          fontWeight: "lighter",
          color: "white",
          opacity: "0.9",
          
      }
        
         var proj_name ={
          fontSize: "30px",
          fontWeight: "bold",
          color: "white",
          opacity: "1",
             marginTop: "-10px"
          
      }
         
          var members_container ={
          width: "200px",
          height: "100px",
          float: "right",
          marginRight: "-30%",
          textAlign: "center",
          borderBottom: "1px solid white",      
              
          
      }
          
           var botao_add_member = {
          backgroundColor: "blue",
          width: "70px",
          height: "70px",
          borderRadius: "100px",
          border: "1px solid white",
          backgroundColor: "#c3c3c9",
          textAlign: "center",
               margin: "auto",

          
      }
      
    return (
        
    <div>   
        
        
        <div style={estilo_menu} >
        
        <div style={container_username}>
        <h2 style={username}> John Surname 
        </h2>
        </div>
       
      </div>        
        
        
        
         <div style={botao_new_bsp}  >
         <h2 style={plus}> + 
        </h2>
        </div>
        
          
        
        <div style={container_projname}>
        <h2 style={seeing}> You're seeing  </h2>
        <h2 style={proj_name}> Project #x   </h2>
        </div>
        
        <div style={members_container}>
         <div style={botao_add_member}> Add Member
        
        </div>
        </div>
        
    </div>    
        
       
       
       
    );
  }
}


export default ProjectPage;
