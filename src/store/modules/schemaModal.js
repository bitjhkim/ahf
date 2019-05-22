import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const INITIALIZE = 'connectionModal/INITIALIZE';
const CHANGE_INPUT = 'connectionModal/CHANGE_INPUT';
const SHOW_MODAL = 'connectionModal/SHOW_MODAL';
const HIDE_MODAL = 'connectionModal/HIDE_MODAL';

// action creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

// initial state
const initialState = Map({
    visible: false,
    text: ''
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
    }
}, initialState);