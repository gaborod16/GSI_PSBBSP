import React, { Component } from 'react';
import {Button, Well, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class MainPage extends Component {

  constructor() {
    super();
    this.state = {
      user: ''
    }
  }

  render() {
    return (
      <div>
        <h2> Isto só devia aparecer após o click no login </h2>
      </div>
    );
  }
}

export default MainPage;

