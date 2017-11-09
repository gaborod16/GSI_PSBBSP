import React, { Component } from 'react';
import {Table, Glyphicon, Col} from 'react-bootstrap';

const ListTableLine = ({index, name, editFunc, deleteFunc}) => (
  <tr>
    <td>{index}</td>
    <td>{name}</td>
    <td>
      <Col sm={6}>
        <a onClick={editFunc}>
          <Glyphicon glyph="pencil" className="darkGrey"/>
        </a>
      </Col>
      <Col sm={6}>
        <a onClick={deleteFunc}>
          <Glyphicon glyph="remove" className="red"/>
        </a>
      </Col>
    </td>
  </tr>
)

class ListTable extends Component {
  constructor() {
    super();
    this.state={};
    this.getTableLines = this.getTableLines.bind(this);
  }

  getTableLines() {
    return this.props.data.map((entity) => 
      <ListTableLine
        key={entity.index}
        index={entity.index} 
        name={entity.name} 
        editFunc={this.props.editFunc} 
        deleteFunc={this.props.deleteFunc}
      />
    );
  }

  render() {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>{this.props.entityName}</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.getTableLines()}
        </tbody>
      </Table>
    )
  }
}


export default ListTable;