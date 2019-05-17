import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ConnectionContainer from 'containers/connection/ConnectionContainer';
import ConnectionModalContainer from 'containers/connection/ConnectionModalContainer';
import * as connectionActions from 'store/modules/connection';
import { bindActionCreators } from 'redux';

const ConnectionPage = () => {
  return (
    <PageTemplate>
      <ConnectionContainer/>
      <ConnectionModalContainer/>
    </PageTemplate>
  );
};

// ConnectionPage.preload = (dispatch, params) => {
//   const ListActions = bindActionCreators(connectionActions, dispatch);
//   return ListActions.getConnectionList();
// }

export default ConnectionPage;
