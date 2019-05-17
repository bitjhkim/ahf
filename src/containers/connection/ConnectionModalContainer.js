import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as connectionModalActions from 'store/modules/connectionModal';
import ConnectionModal from 'components/connection/ConnectionModal';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class ConnectionModalContainer extends Component {
    componentDidMount() {
        console.log('modal componentDidMount');
    }

    componentWillReceiveProps(...args) {
        console.log('modal componentWillReceiveProps', args);
        // this.getConnectionDetail();
    }

    // shouldComponentUpdate(...args) {
    //     console.log('modal shouldComponentUpdate', args);
    //     // this.getConnectionDetail();
    // }

    componentWillUpdate(...args) {
        console.log('modal componentWillUpdate', args);
        // this.getConnectionDetail();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('modal componentDidUpdate', prevProps, prevState);
        // this.getConnectionDetail();
    }
    getConnectionDetail = async ()  => {
        const {  id, ConnectionModalActions } = this.props;
        console.log('id', id);
        await ConnectionModalActions.getConnectionDetail(id);
    }

    handleChangeInput = ({name, value}) => {
        const { ConnectionModalActions } = this.props;
        ConnectionModalActions.changeInput({name, value});
    }

    handleCancel = () => {
        const { ConnectionModalActions } = this.props;
        ConnectionModalActions.hideModal();
    }

    handleConfirm = async () => {
        const { ConnectionModalActions, history, match } = this.props;
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

    handleSubmit = async () => {
        const { ip, schema, description, ConnectionModalActions, history, location } = this.props;
        const post = {
          id: 0,
          ip,
          schema,
          description
        };
        try {
          const { id } = queryString.parse(location.search);
          if(id) {
            await ConnectionModalActions.editPost({ id, ...post });
            history.push(`/post/${id}`);
            return;
          } 
          await ConnectionModalActions.writePost(post);
          // 페이지를 이동시킵니다. 주의: postId는 상단에서 레퍼런스를 만들지 말고
          // 이 자리에서 this.props.postId를 조회해 주어야 합니다(현재 값을 불러오기 위함).
          history.push(`/post/${this.props.postId}`);
        } catch (e) {
          console.log(e);
        }
      }

    render() {
        const { visible, ip, schema, description } = this.props;
        const { handleChangeInput, handleCancel, handleConfirm } = this;

        return (
        <ConnectionModal 
        visible={visible} 
        ip={ip} 
        schema={schema} 
        description={description} 
        onCancel={handleCancel} 
        onChangeInput={handleChangeInput} 
        onConfirm={handleConfirm}/>
        );
    }
}

export default connect(
    (state) => ({
        visible: state.connectionModal.get('visible'),
        id: state.connectionModal.get('id'),
        ip: state.connectionModal.get('ip'),
        schema: state.connectionModal.get('schema'),
        description: state.connectionModal.get('description'),
    }),
    (dispatch) => ({
        ConnectionModalActions: bindActionCreators(connectionModalActions, dispatch),
    })
)(withRouter(ConnectionModalContainer));
