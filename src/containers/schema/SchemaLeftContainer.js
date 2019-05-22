import React, { Component } from 'react';
import SimpleTree from 'components/common/SimpleTree';
import { bindActionCreators } from 'redux';
import * as schemaActions from 'store/modules/schema';
import { connect } from 'react-redux';
import shouldCancel from 'lib/shouldCancel';

class SchemaLeftContainer extends Component {
  componentDidMount() {
    this.getSchemaGetSchemaList();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps, prevState);
  // }

  getSchemaGetSchemaList = async () => {
    // console.log(shouldCancel());
    // 페이지와 태그 값을 부모로부터 받아 옵니다.
    const {  SchemaActions, selectedBtnNum } = this.props;
    await SchemaActions.getSchemaGetSchemaList(selectedBtnNum);
  }

  render() {
    const { selectedBtnNum, connectionName, extractList } = this.props;

    return (
      <SimpleTree selectedBtnNum={selectedBtnNum} connectionName={connectionName} treeData={extractList}/>
    );
  }
}

export default connect(
  (state) => ({
    selectedBtnNum: state.schema.get('selectedBtnNum'),
    connectionName: state.schema.get('connectionName'),
    extractList: state.schema.get('extractList')
  }),
  (dispatch) => ({
    SchemaActions: bindActionCreators(schemaActions, dispatch),
  })
)(SchemaLeftContainer);
