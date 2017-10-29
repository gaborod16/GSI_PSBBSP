import React, { Component } from 'react';
import { PageHeader, Col, Grid, Row} from 'react-bootstrap';
import './template.css';

class Template extends Component {

  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col id="menu" md={3} sm={3} xs={3}>
            <h3 id="menu-header">User Information</h3>
          </Col>
          <Col md={9} sm={9} xs={9} className="">
            <PageHeader className="center-text">Business System Planning</PageHeader>
            <div id="content"></div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Template;
