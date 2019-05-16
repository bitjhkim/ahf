import React, { Component } from 'react';
import Connection from 'components/connection/ConnectionList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as baseActions from 'store/modules/base';
import * as connectionActions from 'store/modules/connection';
import { withRouter } from 'react-router-dom';
import shouldCancel from 'lib/shouldCancel';

class ConnectionContainer extends Component {

  getConnectionList = () => {
    if (shouldCancel()) return;
    console.log(shouldCancel());
    // 페이지와 태그 값을 부모로부터 받아 옵니다.
    const {  ConnectionActions } = this.props;
    ConnectionActions.getConnectionList();
  }

  componentDidMount() {
    this.getConnectionList();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    // 페이지/태그가 바뀔 때 리스트를 다시 불러옵니다.
    // if(prevProps.page !== this.props.page || prevProps.tag !== this.props.tag) {
    //   this.getPostList();
    //   // 스크롤을 맨 위로 올립니다.
    //   document.documentElement.scrollTop = 0; 
    // }
  }

  handleShowModal = () => {
    const { BaseActions } = this.props;
    BaseActions.showModal('connectionModal');
  }

  render() {
    const { handleShowModal } = this;
    const { list } = this.props;

    return (
      <Connection list={list} onShowModal={handleShowModal}/>
    );
  }
}

export default connect(
  (state) => ({
    list: state.connection,
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    ConnectionActions: bindActionCreators(connectionActions, dispatch)
  })
)(withRouter(ConnectionContainer));
