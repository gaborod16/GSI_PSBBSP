import React, {Component} from 'react';
import { PageHeader, Col, Grid, Row} from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom';

import './template.css';

import Login from './loginForm';
import Register from './register';
import MainPage from './mainPage';
import ListOrganizationUnits from './listOrganizationUnits'
import ListSupportSystems from './listSupportSystems'
import NewProject from './newProject';
import ProjectPage from './projectPage';
import NewProcess from './newProcess';
import ShowMatrix from './showMatrix';

class Content extends Component {
  render() {
    return (
        <Switch>
          <Route path={'/'} exact component={MainPage}></Route>
          <Route path={'/login'} exact component={Login}></Route>
          <Route path={'/register'} exact component={Register}></Route>
          <Route path={'/listOrganizationUnits'} exact component={ListOrganizationUnits}></Route>
          <Route path={'/listSupportSystems'} exact component={ListSupportSystems}></Route>
          <Route path={'/newProject'} exact component={NewProject}></Route>
          <Route path={'/projectPage'} exact component={ProjectPage}></Route>
          <Route path={'/newProcess'} exact component={NewProcess}></Route>
          <Route path={'/showMatrix'} exact component={ShowMatrix}></Route>
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