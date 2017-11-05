

import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class NewBsp extends Component {

  constructor() {
    super();
    this.state = {
      user: ''
    }
    this.redirectmainpage = this.redirectmainpage.bind(this);
  }
    
redirectmainpage() {
       
    this.props.history.push('./mainpage')
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
      
       var container_bsps ={
          
          height: "400px",
          width: "70%",
          border: "2px solid white",
          borderStyle: "dotted", 
          marginLeft: "16%",
          marginTop: "-60%",
          borderRadius: "15px",
           textAlign: "center"
     }
       
       var info_bsp={
          fontSize: "25px",
          fontWeight: "bold",
          color: "#686868",
          opacity: "0.9",
           marginTop: "-10%"
       }
       
       var form_estilo = {
           marginTop: "10%",
           height: "100%"
       }
      
        var texto_form_estilo = {
          fontSize: "20px",
            fontWeight: "lighter"
       }
        
        var estilo_input = {
        padding: "5px", 
        border: "2px solid #ccc", 
         borderRadius: "5px",
            height: "7%",
            width: "70%"
        }
        
        var estilo_save = {
        padding: "5px", 
        border: "2px solid #f8c97f", 
        backgroundColor: "#f8c97f",    
         borderRadius: "5px",
            marginLeft: "0%",
            marginTop: "5%",
          
            width: "40%"
            
        }
    return (
        
    <div>    
    <div style={estilo_menu} >
        
        <div style={container_username}>
        <h2 style={username}> John Surname 
        </h2>
        </div>
       
      </div>
        
        
         
        <div style={container_bsps}>
        <h2 style={info_bsp}> New BSP
        </h2>
        
            <form style={form_estilo} action="">
        
                <h3 style={texto_form_estilo}> BPS Name: </h3>
                    <input   style={estilo_input} type="text" name="BPSName" defaultValue="">
                    </input>
  
                <h3 style={texto_form_estilo}> Something else: </h3>
                    <input  style={estilo_input} type="text" name="...." defaultValue="">
                    </input>
        
                <h3 style={texto_form_estilo}> Something else: </h3>
                    <input  style={estilo_input} type="text" name="...." defaultValue="">
                    </input>
        
                <h3 style={texto_form_estilo}> Something else: </h3>
                    <input  style={estilo_input} type="text" name="...." defaultValue="">
                    </input>
        
                
  
               
                <input  style={estilo_save} type="submit" value="Save"  onClick={this.redirectmainpage}>
                </input>
            </form>
         
        </div>
        
        
        
       
        
    </div>    
        
       
       
       
    );
  }
}


export default NewBsp;
