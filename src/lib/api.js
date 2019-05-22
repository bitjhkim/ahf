import axios from 'axios';

export const getConnectionList = () => axios.get(`/api/connection/list`);
export const getConnectionDetail = (id) => axios.get(`/api/connection/detail/${id}`);
export const postConnectionSave = ({ ip, schema, name, password, use }) => axios.post(`/api/connection/save`, { ip, schema, name, password, use });
export const patchConnectionUpdate = ({ id, ip, schema, name, password, use }) => axios.patch(`/api/connection/update/${id}`, { ip, schema, name, password, use });
export const deleteConnectionDelete = (id) => axios.delete(`/api/connection/delete/${id}`);


export const getSchemaGetSchemaList = (connectionName) => axios.get(`/api/schema/getschemalist/${connectionName}`);
export const postSchemaGetSchema = ({ connectionName, catalogName, schemaName, tableName }) => axios.post(`/api/schema/getschema`, { connectionName, catalogName, schemaName, tableName });
export const getSchemaCollectSchema = ( connectionName ) => axios.get(`/api/schema/collectschema/${connectionName}`);
export const postSchemaGetColumnList = ({ connectionName, query }) => axios.post(`/api/schema/getscolumnlist`, { connectionName, query });

