import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ConnectionContainer from 'containers/connection/ConnectionContainer';
import ConnectionModalContainer from 'containers/connection/ConnectionModalContainer';

const ConnectionPage = () => {
  return (
    <PageTemplate>
      <ConnectionContainer/>
      <ConnectionModalContainer/>
    </PageTemplate>
  );
};

export default ConnectionPage;
