import React, { Component } from 'react';
import {PageHeader, Form, Checkbox, Col, Button, Accordion, Panel, FormControl, ListGroup, MenuItem, ListGroupItem, FormGroup, ButtonGroup, DropdownButton, Glyphicon, ControlLabel, Row, ProgressBar} from 'react-bootstrap';

import Template from './template';
import YouSeeing from './youSeeing'

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

const SubsystemRelations = ({title, plusFunc, allSubsystems, selectedSubsystems}) => (
  <Col sm={6}>
    <Panel header={title}>
      <Row>
        <Col sm={9} md={9}>
          <ButtonGroup vertical block>
            <DropdownButton title={'Select a subsystem'} id="dropdown-size-medium" block>
              <MenuItem key={1} eventKey={1}>Add dynamically</MenuItem>
              <MenuItem key={2} eventKey={2}>Like in new</MenuItem>
              <MenuItem key={3} eventKey={3}>Project page</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </Col>
        <Col sm={2} md={2}>
          <Button bsStyle="success" onClick={plusFunc}>
            <Glyphicon glyph="plus" className="white"/>
          </Button>
        </Col>
      </Row>

      <hr/>

      <ListSubsystemItem name="Monitor"/>      
    </Panel>
  </Col>
);

const ListSubsystemItem = ({name, minusFunc}) => (
  <Row>
    <Col sm={9} md={9}>
      <h4>{name}</h4>
    </Col>
    <Col sm={2} md={2}>
      <Button bsStyle="danger" onClick={minusFunc}>
        <Glyphicon glyph="minus" className="white"/>
      </Button>
    </Col>
  </Row>
);

class Subsystem extends Component {

  constructor() {
    super();
    this.state = {
    }
    this.subsName = 'Cluster de recursos';
  }

  render() {
    return (
      <Template history={this.props.history}>
        <YouSeeing title={"Subsystem: " + this.subsName}/>
        <Row>
          <Col componentClass={ControlLabel} sm={2} md={2}>
            Description:
          </Col>
          <Col sm={9} md={6}>
            <FormControl
              componentClass="textarea"
              defaultValue="" //com deafultvalue fica alteravel
              placeholder="Enter a description for this subsystem"
            />
          </Col>
        </Row>

        <br/>

        <Row>
          <Col componentClass={ControlLabel} sm={2} md={2}>
            Scores:
          </Col>
           <Col sm={9} md={6}>
            <Accordion>
              <Panel header="Click here to see the specific scores" eventKey="1">
                <SpecificScore scoreName="Impact" points={5}/>
                <SpecificScore scoreName="Potential Benefits" points={6}/>
                <SpecificScore scoreName="Probability of Success" points={8}/>
                <SpecificScore scoreName="Demand" points={4}/>
                <SpecificScore scoreName="Cost" points={7}/>
                <SpecificScore scoreName="Development Time" points={9}/>
              </Panel>
            </Accordion>
          </Col>
        </Row>

        <Row>
          <Col componentClass={ControlLabel} sm={2} md={2}>
            Total score:
          </Col>
           <Col sm={9} md={6}>
            <ProgressBar bsStyle="success" label={'7.4/10'} now={7.4} min={0} max={10}/>
          </Col>
        </Row>

        <hr/>

        <Row>
          <Col sm={11} md={8}>
            <SubsystemRelations title="Receives information from..."/>
            <SubsystemRelations title="Sends information to..."/>
          </Col>
        </Row>
      </Template>
    );
  }
}

export default Subsystem;
