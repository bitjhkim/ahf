import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_CONNECTION_LIST = 'connection/GET_CONNECTION_LIST';

// action creators
export const getConnectionList = createAction(GET_CONNECTION_LIST, api.getConnectionList);

// initial state
// const initialState = List([
//     Map({
//         id: 1,
//         ip: '127.0.0.1',
//         schema: 'test',
//         name: 'aaa',
//         password: 'bbb',
//         use: true
//     }),
//     Map({
//         id: 2,
//         ip: '127.0.0.2',
//         schema: 'dump',
//         name: 'aaa',
//         password: 'bbb',
//         use: true
//     })
//   ]);

const initialState = Map({
    list: List()
});

// reducer
export default handleActions({
    ...pender({
        type: GET_CONNECTION_LIST,
        onSuccess: (state, action) => {
            const { data: list } = action.payload;
            return state.set('list', fromJS(list));
        }
      })
}, initialState);