import axios from 'axios';

export const getConnectionList = () => axios.get(`/api/connection/list`);
export const getConnectionDetail = (id) => axios.get(`/api/connection/detail/${id}`);
export const postConnectionSave = ({ ip, schema, name, password, use }) => axios.post(`/api/connection/save`, { ip, schema, name, password, use });
export const patchConnectionUpdate = ({ id, ip, schema, name, password, use }) => axios.patch(`/api/connection/update/${id}`, { ip, schema, name, password, use });
export const deleteConnectionDelete = (id) => axios.delete(`/api/connection/delete/${id}`);
