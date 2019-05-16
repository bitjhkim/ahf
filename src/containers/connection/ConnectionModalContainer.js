import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import ConnectionModal from 'components/connection/ConnectionModal';
import { withRouter } from 'react-router-dom';

class ConnectionModalContainer extends Component {
    handleCancel = () => {
        const { BaseActions } = this.props;
        BaseActions.hideModal('connectionModal');
    }

  handleConfirm = async () => {
    const { BaseActions, history, match } = this.props;
    // const { id } = match.params;

    // try {
    //   // 포스트 삭제 후, 모달 닫고 홈페이지로 이동
    //   await PostActions.removePost(id);
    //   BaseActions.hideModal('remove');
    //   history.push('/');
    // } catch (e) {
    //   console.log(e);
    // }

    }

    render() {
        const { visible } = this.props;
        const { handleCancel, handleConfirm } = this;

        return (
        <ConnectionModal visible={visible} onCancel={handleCancel} onConfirm={handleConfirm}/>
        );
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['connectionModal', 'visible'])
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(withRouter(ConnectionModalContainer));
