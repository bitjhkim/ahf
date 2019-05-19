import React, { Component } from 'react';
import Connection from 'components/connection/ConnectionList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as connectionActions from 'store/modules/connection';
import * as connectionModalActions from 'store/modules/connectionModal';
// import { withRouter } from 'react-router-dom';
import shouldCancel from 'lib/shouldCancel';

class ConnectionContainer extends Component {
  componentDidMount() {
    this.getConnectionList();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevProps', prevProps);
    // console.log('prevState', prevState);
    // 페이지/태그가 바뀔 때 리스트를 다시 불러옵니다.
    // if(prevProps.page !== this.props.page || prevProps.tag !== this.props.tag) {
    //   this.getPostList();
    //   // 스크롤을 맨 위로 올립니다.
    //   document.documentElement.scrollTop = 0; 
    // }
  }

  getConnectionList = () => {
    // console.log(shouldCancel());
    if (shouldCancel()) return;
    // 페이지와 태그 값을 부모로부터 받아 옵니다.
    const {  ConnectionActions } = this.props;
    ConnectionActions.getConnectionList();
  }

  // handleSetConnectionId = (value) => {
  //   const { ConnectionModalActions } = this.props;
  //   const name = 'id';
  //   ConnectionModalActions.changeInput({name, value});
  // }

  handleShowModal = (value) => {
    const { ConnectionModalActions } = this.props;
    ConnectionModalActions.showModal(value);
  }

  render() {
    // const { handleSetConnectionId, handleShowModal } = this;
    const { handleShowModal } = this;
    const { list, loading } = this.props;

    if(loading || loading === undefined) return null; // 로딩 중에는 아무것도 보여주지 않습니다.
    return (
      // <Connection list={list} onShowModal={handleShowModal} onSetConnectionId={handleSetConnectionId}/>
      <Connection list={list} onShowModal={handleShowModal} />
    );
  }
}

export default connect(
  (state) => ({
    list: state.connection.get('list'),
    loading: state.pender.pending['connection/GET_CONNECTION_LIST']
  }),
  (dispatch) => ({
    ConnectionActions: bindActionCreators(connectionActions, dispatch),
    ConnectionModalActions: bindActionCreators(connectionModalActions, dispatch)
  })
)(ConnectionContainer);
