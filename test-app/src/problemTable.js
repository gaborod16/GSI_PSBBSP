import React, { Component } from 'react';
import {Table, Glyphicon, Col} from 'react-bootstrap';

const ListTableLine = ({index, problem, consequence, solution, editFunc, deleteFunc}) => (
  <tr>
    <td>{index}</td>
    <td>{problem}</td>
    <td>{consequence}</td>
    <td>{solution}</td>
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
  constructor(props) {
    super(props);
    this.state={};
    this.getTableLines = this.getTableLines.bind(this);
  }

  getTableLines() {
    return this.props.data.map((entity) => 
      <ListTableLine
        key={entity.index}
        index={entity.index} 
        problem={entity.problem} 
        consequence={entity.consequence}
        solution={entity.solution}
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
            <th>Problems</th>
            <th>Consequences</th>
            <th>Solutions</th>
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