import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import SchemaTemplate from 'components/schema/SchemaTemplate';
import SchemaLeftContainer from 'containers/schema/SchemaLeftContainer';
import SchemaListContainer from 'containers/schema/SchemaListContainer';
import SchemaPaneContainer from 'containers/schema/SchemaPaneContainer';
import * as schemaActions from 'store/modules/schema';
import { bindActionCreators } from 'redux';

const SchemaPage = ({ match }) => {
  const { connectionName } = match.params;

  return (
    <PageTemplate>
      <SchemaTemplate
        left={<SchemaLeftContainer/>}
        list={<SchemaListContainer/>}
        pane={<SchemaPaneContainer/>}
      />
    </PageTemplate>
  );
};

SchemaPage.preload = (dispatch, params) => {
  const { connectionName } = params;
  const SchemaActions = bindActionCreators(schemaActions, dispatch);
  return SchemaActions.getSchemaGetSchemaList(connectionName);
}

export default SchemaPage;