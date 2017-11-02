import React from 'react';
import { PageHeader, Col, Grid, Row} from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom';
import './template.css';

import Login from './loginForm';
import Register from './register';

const Content = () => (
  <Grid fluid>
    <Switch>
      <Route path={'/'} exact component={Login}></Route>
      <Route path={'/register'} exact component={Register}></Route>
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
