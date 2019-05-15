import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

// action types

// action creators

// initial state
const initialState = List([
    Map({
        id: 1,
        type: 'table'
    }),
    Map({
        id: 2,
        type: 'vertex'
    })
  ]);

// reducer
export default handleActions({

}, initialState);