import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

// action types

// action creators

// initial state
const initialState = List([
    Map({
        id: 1,
        type: 'edge',
        name: 'know',
        source: 2,
        destination: 3
    }),
    Map({
        id: 2,
        type: 'vertex',
        name: 'ceo'
    }),
    Map({
        id: 3,
        type: 'vertex',
        name: 'employee'
    })
  ]);

// reducer
export default handleActions({

}, initialState);