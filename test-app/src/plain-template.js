import React, { Component } from 'react';
import { PageHeader, Col, Grid, Row} from 'react-bootstrap';
import './template.css';

class Template extends Component {

  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col className="center-block">
            <PageHeader className="center-text">Business System Planning</PageHeader>
            <div id="content"></div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Template;
