import React, {Component} from 'react';
import { PageHeader, Col, Grid, Row} from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom';

import './template.css';

import Login from './loginForm';
import Register from './register';
import MainPage from './mainPage';
import NewProject from './newProject';
import ProjectPage from './projectPage';

class Content extends Component {
  render() {
    return (
        <Switch>
          <Route path={'/'} exact component={Login}></Route>
          <Route path={'/register'} exact component={Register}></Route>
          <Route path={'/mainPage'} exact component={MainPage}></Route>
          <Route path={'/newProject'} exact component={NewProject}></Route>
          <Route path={'/projectPage'} exact component={ProjectPage}></Route>
        </Switch>
    );
  }
}

class App extends Component {
  render() {

    return (
      <Grid fluid>
        <Row>
          <PageHeader className="center-text">Business System Planning</PageHeader>
        </Row>
        <Content/>
      </Grid>
    );
  }
}

export default App;