import React, { Component } from 'react';
import Schema from 'components/schema/SchemaList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SchemaListContainer extends Component {

  render() {
    const { list } = this.props;

    return (
      <Schema list={list}/>
    );
  }
}

export default connect(
  (state) => ({
    list: state.schema.get('list')
  })
)(SchemaListContainer);
