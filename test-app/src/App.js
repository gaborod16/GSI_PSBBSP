import React from 'react';
import { PageHeader, Col, Grid, Row} from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom';
import './template.css';

import Login from './loginForm';
import Register from './register';
import MainPage from './mainpage';
import NewBsp from './newbsp';
import ProjectPage from './projectpage';

const Content = () => (
  <Grid fluid>
    <Switch>
      <Route path={'/'} exact component={Login}></Route>
      <Route path={'/register'} exact component={Register}></Route>
      <Route path={'/mainpage'} exact component={MainPage}></Route>
     <Route path={'/newbsp'} exact component={NewBsp}></Route>
      <Route path={'/projectpage'} exact component={ProjectPage}></Route>
    </Switch>
  </Grid>
)

const App = () => (
  <Grid fluid>
    <Row className="show-grid">
      <Col className="center-block">
        <PageHeader className="center-text">Business System Planning</PageHeader>
        <Content/>
      </Col>
    </Row>
  </Grid>
)

export default App;