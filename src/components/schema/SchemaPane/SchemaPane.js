import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class SchemaList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // return this.props.todos !== nextProps.todos;
  }  

  render() {
    const { list } = this.props;
    const connectionList = list.map(
      connection => (
        <div className="card-deck mb-3 text-center">
        </div>
      )
    );

    return (
      <div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
          <h1 class="h2">Schema</h1>
        </div>
        <Container>
          <Row>
            <Col xs="6">.col-6</Col>
            <Col xs="6">.col-6</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SchemaList;