import React from 'react';
import {Modal, Form, Button, FormControl, FormGroup, Col, ControlLabel} from 'react-bootstrap';

const ModalAdd = ({title, entity, showModal, cancelFunc, onChangeFunc, submitFunc}) => (

  <Modal show={showModal} onHide={cancelFunc}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form horizontal onSubmit={submitFunc}>
        <FormGroup controlId="formOU">
          <Col componentClass={ControlLabel} sm={3}>
            {entity}
          </Col>
          <Col sm={9}>
            <FormControl 
              type="text"
              defaultValue=""
              placeholder={"Enter " + entity}
              onChange={onChangeFunc}
            />
          </Col>
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup>

          <Col smOffset={6} sm={3}>
            <Button type="submit" onClick={cancelFunc} block>
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
);

export default ModalAdd;