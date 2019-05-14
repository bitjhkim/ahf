import React, { Component } from 'react';
import Connection from 'components/connection/ConnectionList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/editor';

class ConnectionContainer extends Component {

  render() {
    const { list } = this.props;

    return (
      <Connection list={list}/>
    );
  }
}

export default connect(
  (state) => ({
    list: state.connection
  })
)(ConnectionContainer);
