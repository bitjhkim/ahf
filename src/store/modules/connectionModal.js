import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const INITIALIZE = 'connectionModal/INITIALIZE';
const CHANGE_INPUT = 'connectionModal/CHANGE_INPUT';
const SHOW_MODAL = 'connectionModal/SHOW_MODAL';
const HIDE_MODAL = 'connectionModal/HIDE_MODAL';
const POST_CONNECTION_SAVE = 'connectionModal/POST_CONNECTION_SAVE';
const GET_CONNECTION_DETAIL = 'connectionModal/GET_CONNECTION_DETAIL';
const PATCH_CONNECTION_UPDATE = 'connectionModal/PATCH_CONNECTION_UPDATE';

// action creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const postConnectionSave = createAction(POST_CONNECTION_SAVE, api.postConnectionSave);
export const getConnectionDetail = createAction(GET_CONNECTION_DETAIL, api.getConnectionDetail);
export const patchConnectionUpdate = createAction(PATCH_CONNECTION_UPDATE, api.patchConnectionUpdate);

// initial state
const initialState = Map({
    visible: false,
    id: '',
    ip: '',
    schema: '',
    description: '',
    logged: false // 현재 로그인 상태
});

// reducer
export default handleActions({
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        return state.set(name, value);
    },
    [SHOW_MODAL]: (state, action) => {
        return state.set('visible', true);
    },
    [HIDE_MODAL]: (state, action) => {
        return state.set('visible', false);
    },
    ...pender({
        type: POST_CONNECTION_SAVE,
        onSuccess: (state, action) => {
          const { _id } = action.payload.data;
          return state.set('postId', _id);
        }
    }),
    ...pender({
        type: GET_CONNECTION_DETAIL,
        onSuccess: (state, action) => {
          const { id, ip, schema, description } = action.payload.data;
          return state.set('id', id)
                      .set('ip', ip)
                      .set('schema', schema)
                      .set('description', description)
        }
      }),
      ...pender({
        type: PATCH_CONNECTION_UPDATE,
        onSuccess: (state, action) => {
          const { _id } = action.payload.data;
          return state.set('postId', _id);
        }
    }),
}, initialState);