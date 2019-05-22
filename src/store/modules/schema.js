import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const CHANGE_INPUT = 'schema/CHANGE_INPUT';
const GET_SCHEMA_GETSCHEMALIST = 'schema/GET_SCHEMA_GETSCHEMALIST';

// action creators
export const changeInput = createAction(CHANGE_INPUT);
export const getSchemaGetSchemaList = createAction(GET_SCHEMA_GETSCHEMALIST, api.getSchemaGetSchemaList);

// initial state
const initialState = Map({
    selectedBtnNum: 1,
    
    connectionName: '',

    extractList: List([]),
    extractColumnList: List([]),
    loaderColumnList: List([]),
    
    list: List([
        Map({
            id: 1,
            type: 'table'
        }),
        Map({
            id: 2,
            type: 'vertex'
        })
    ]),
});

// reducer
export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        return state.set(name, value);
    },
    ...pender({
        type: GET_SCHEMA_GETSCHEMALIST,
        onSuccess: (state, action) => {
            const { ConnectionName, Table } = action.payload.data;
            console.log('>>>>>>', ConnectionName, Table)
            return state.set('connectionName', ConnectionName)
                      .set('extractList', Table);
        }
    }),
}, initialState);