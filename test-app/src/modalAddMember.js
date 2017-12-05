import React, {Component} from 'react';
import {Modal, Form, Button, FormControl, FormGroup, Col, ControlLabel, MenuItem, ButtonGroup, DropdownButton} from 'react-bootstrap';

class ModalAddMember extends Component {
  constructor() {
    super();
    this.state={
      selectedText: 'Select the new member'
    };
    this.getUsers = this.getUsers.bind(this);
    this.updateDropdown = this.updateDropdown.bind(this);
  }

  updateDropdown(index) {
    this.setState({selectedText: this.props.listUsers[index].email});
  }

  getUsers() {
    return this.props.listUsers.map((user, index) => 
      <MenuItem key={user.id} eventKey={index} onSelect={this.updateDropdown}>{user.email}</MenuItem>
    );
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.cancelFunc}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form horizontal onSubmit={this.props.submitFunc}>

            <FormGroup controlId="addedMember">
              <Col componentClass={ControlLabel} sm={3}>Member to add:</Col>
              <Col sm={9}>
                <ButtonGroup vertical block>
                  <DropdownButton title={this.state.selectedText} id="dropdown-size-medium" block onSelect={this.props.onSelectFunc}>
                    {this.getUsers()}
                  </DropdownButton>
                </ButtonGroup>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={6} sm={3}>
                <Button type="submit" onClick={this.props.cancelFunc} block>
                  Cancel
                </Button>
              </Col>
              <Col sm={3}>
                <Button type="submit" bsStyle='danger' block>
                  Add
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default ModalAddMember;