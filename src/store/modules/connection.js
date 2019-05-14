import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

// action types

// action creators

// initial state
const initialState = List([
    Map({
        id: 1,
        ip: '127.0.0.1',
        schema: 'test',
        name: 'aaa',
        password: 'bbb',
        use: true
    }),
    Map({
        id: 2,
        ip: '127.0.0.2',
        schema: 'dump',
        name: 'aaa',
        password: 'bbb',
        use: true
    })
  ]);

// reducer
export default handleActions({

}, initialState);