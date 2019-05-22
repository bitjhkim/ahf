import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as schemaActions from 'store/modules/schema';
import { Button, ButtonGroup, Container, Row, Col } from 'reactstrap';

class SchemaTemplate extends Component {

  handleChangeInput = ({name, value}) => {
    const { SchemaActions } = this.props;
    SchemaActions.changeInput({name, value});
  }

  onRadioBtnClick(value) {
    const { handleChangeInput } = this;
    const name = 'selectedBtnNum';
    handleChangeInput({ name, value });
  }

  render() {
    const { left, list, pane, selectedBtnNum } = this.props;

    return (
      <Container>
        <Row>
          <ButtonGroup>
            <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={selectedBtnNum === 1}>One</Button>
            <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={selectedBtnNum === 2}>Two</Button>
            <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={selectedBtnNum === 3}>Three</Button>
          </ButtonGroup>
        </Row>
        <Row>
          <Col xs="6">{ left }</Col>
          <Col xs="6">
            <Row>
              <div>{ list }</div>
            </Row>
            <Row>
              <div>{ pane }</div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(
  (state) => ({
    selectedBtnNum: state.schema.get('selectedBtnNum')
  }),
  (dispatch) => ({
    SchemaActions: bindActionCreators(schemaActions, dispatch)
  })
)(SchemaTemplate);
