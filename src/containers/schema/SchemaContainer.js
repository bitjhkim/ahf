import React, { Component } from 'react';
import Schema from 'components/schema/SchemaList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { schema } from 'react-redux';

class SchemaContainer extends Component {

  render() {
    const { list } = this.props;

    return (
      <Schema list={list}/>
    );
  }
}

export default connect(
  (state) => ({
    list: state.schema
  })
)(SchemaContainer);
