import React, { Component } from 'react';
import {PageHeader, Form, Checkbox, Col, Button, Accordion, Panel, PanelGroup, FormControl, ListGroup, MenuItem, ListGroupItem, FormGroup, ButtonGroup, DropdownButton, Glyphicon, ControlLabel, Row, ProgressBar} from 'react-bootstrap';

import Template from './template';
import YouSeeing from './youSeeing';
import CircleGroup from './circleGroup';
import ListTable from './listTable';
import ProblemTable from './problemTable';

const plus = 'assets/plus.png';

const SpecificScore = ({ scoreName, points, plusFunc, minusFunc }) => (
  <Row>
    <Col componentClass={ControlLabel} sm={4} md={3}>
      {scoreName}:
    </Col>
    <Col sm={6} md={7}>
      <ProgressBar label={points + '/10'} now={points} min={0} max={10}/>
    </Col>
    <Col sm={2} md={2}>
      <ButtonGroup>
        <Button bsSize="xsmall" onClick={plusFunc}>
          <Glyphicon glyph="plus" className="darkGrey"/>
        </Button>
        <Button bsSize="xsmall" onClick={plusFunc}>
          <Glyphicon glyph="minus" className="darkGrey"/>
        </Button>
      </ButtonGroup>
    </Col>
  </Row>
);

class SolutionItem extends Component {
  constructor() {
    super();
    this.state = {}
    this.getHeader = this.getHeader.bind(this);
  }

  getHeader() {
    return this.props.name + " | Score: " + this.props.score*100 + "%";
  }

  render() {
    return (
      <Accordion>
        <Panel header={this.getHeader()} eventKey={this.props.index}>
          <SpecificScore scoreName="Impact" points={5}/>
          <SpecificScore scoreName="Potential Benefits" points={6}/>
          <SpecificScore scoreName="Probability of Success" points={8}/>
          <SpecificScore scoreName="Demand" points={4}/>
          <SpecificScore scoreName="Cost" points={7}/>
          <SpecificScore scoreName="Development Time" points={9}/>
        </Panel>
      </Accordion>
    );
  }
}

class ProblemsSolutions extends Component {

  constructor() {
    super();
    this.state = {
    }
    this.solutions = [
              {index: 1, solution: 'Hire HR specialist', score: 45/60}, 
              {index: 2, solution: 'Pray everyday', score: 20/60}, 
    ];

    this.getSolutions = this.getSolutions.bind(this);
  }

  getSolutions() {
    return this.solutions.map((entity) => 
      <SolutionItem
        key={entity.index}
        index={entity.index}
        name={entity.solution}
        score={entity.score}
      />
    );
  }

  render() {
    return (
      <Template history={this.props.history}>
        <YouSeeing title={"Problems and solutions"}/>
        <Row>

          <Col sm={11} md={9}>
            {this.getSolutions()}
          </Col>
        </Row>
      </Template>
    );
  }
}

export default ProblemsSolutions;
