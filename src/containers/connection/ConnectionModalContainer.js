import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as connectionModalActions from 'store/modules/connectionModal';
import ConnectionModal from 'components/connection/ConnectionModal';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class ConnectionModalContainer extends Component {
    // componentDidMount() {
    //     console.log('modal componentDidMount');
    // }

    // componentWillReceiveProps(...args) {
    //     console.log('modal componentWillReceiveProps', args);
    // }

    // 컴포던트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드 입니다. 여기서 false 를 반환하면 아래 메서드들을 호출하지 않습니다.
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('modal shouldComponentUpdate', nextProps, nextState);
    //     return true;
    // }

    // componentWillUpdate(...args) {
    //     console.log('modal componentWillUpdate', args);
    // }

    // 리렌더링을 완료한 후 실행합니다. 업데이트가 끝난 직후이므로 DOM 관련 처리를 해도 무방합니다.
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('modal componentDidUpdate', prevProps, prevState);
        if ( this.props.visible ) this.getConnectionDetail();
    }

    // selct connection
    getConnectionDetail = async ()  => {
        const { uid, ConnectionModalActions } = this.props;
        await ConnectionModalActions.getConnectionDetail(uid);
    }

    // input change
    handleChangeInput = ({name, value}) => {
        const { ConnectionModalActions } = this.props;
        ConnectionModalActions.changeInput({name, value});
    }

    // modal hidden
    handleCancel = () => {
        const { ConnectionModalActions, location, history, match } = this.props;
        // console.log(queryString.parse(location.search));
        // console.log(match.params);
        // history.push('/model');
        ConnectionModalActions.hideModal();
    }

    // delete connection
    handleConfirm = async () => {
        const { uid, ConnectionModalActions } = this.props;

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
        // try {
        //     const { id } = queryString.parse(location.search);
        //     if(id) {
        //     await ConnectionModalActions.editPost({ id, ...post });
        //     history.push(`/post/${id}`);
        //     return;
        //     } 
        //     await ConnectionModalActions.writePost(post);
        //     // 페이지를 이동시킵니다. 주의: postId는 상단에서 레퍼런스를 만들지 말고
        //     // 이 자리에서 this.props.postId를 조회해 주어야 합니다(현재 값을 불러오기 위함).
        //     history.push(`/post/${this.props.postId}`);
        // } catch (e) {
        //     console.log(e);
        // }
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
        uid: state.connectionModal.get('id'),
        ip: state.connectionModal.get('ip'),
        schema: state.connectionModal.get('schema'),
        description: state.connectionModal.get('description'),
    }),
    (dispatch) => ({
        ConnectionModalActions: bindActionCreators(connectionModalActions, dispatch),
    })
)(withRouter(ConnectionModalContainer));
