import React, { Component } from 'react';
import Model from 'components/model/ModelManager';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { schema } from 'react-redux';
import { model } from 'react-redux';

class ModelContainer extends Component {

  render() {
    const { list } = this.props;

    return (
      <Model list={list}/>
    );
  }
}

export default connect(
  (state) => ({
    list: state.model
  })
)(ModelContainer);
