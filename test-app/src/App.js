import React, {Component} from 'react';
import { PageHeader, Grid, Row} from 'react-bootstrap';
import {Switch, Route, withRouter} from 'react-router-dom';

import './template.css';

import * as path from './paths';
import Login from './loginForm';
import Register from './register';
import MainPage from './mainPage';
import ListOrganizationUnits from './listOrganizationUnits'
import ListSupportSystems from './listSupportSystems'
import NewProject from './newProject';
import EditProject from './editProject';
import ProjectPage from './projectPage';
import NewProcess from './newProcess';
import ShowMatrices from './showMatrices';
import NewDataClass from './newDataClass';
import Subsystem from './subsystemPage';
import ProblemsSolutions from './problemsSolutions';


import * as CRUD from './CRUD';

class Content extends Component {
  render() {
    return (
        <Switch>
          <Route path={path.ROOT} exact component={MainPage}></Route>
          <Route path={path.LOGIN} exact component={Login}></Route>
          <Route path={path.REGISTER} exact component={Register}></Route>
          <Route path={'/listOrganizationUnits'} exact component={ListOrganizationUnits}></Route>
          <Route path={'/listSupportSystems'} exact component={ListSupportSystems}></Route>
          <Route path={path.NEW_PROJECT} exact component={NewProject}></Route>
          <Route path={'/edit_project/:proj_id'} exact component={EditProject}></Route>
          <Route path={'/project/:proj_id'} exact component={ProjectPage}></Route>
          <Route path={'/project/:proj_id/newProcess'} exact component={NewProcess}></Route>
          <Route path={'/project/:proj_id/showMatrices'} exact component={ShowMatrices}></Route>
          <Route path={'/project/:proj_id/newDataClass'} exact component={NewDataClass}></Route>
          <Route path={'/project/:proj_id/subsystemPage/:subs_id'} exact component={Subsystem}></Route>
          <Route path={'/project/:proj_id/problemsSolutions'} exact component={ProblemsSolutions}></Route>
        </Switch>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    console.log(CRUD.getJSON());
    this.checkLoggedOut = this.checkLoggedOut.bind(this);
    this.checkLoggedOut();
  }

  checkLoggedOut() {
    if (!CRUD.hasUser()) {
      console.log("No user logged in")
      this.props.history.push(path.LOGIN);
    }
  }

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

export default withRouter(App);