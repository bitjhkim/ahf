import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_CONNECTION_LIST = 'connection/GET_CONNECTION_LIST';

// action creators
export const getConnectionList = createAction(GET_CONNECTION_LIST, api.getConnectionList);

// initial state
const initialState = Map({
    list: List()
});

// reducer
export default handleActions({
    ...pender({
        type: GET_CONNECTION_LIST,
        onSuccess: (state, action) => {
            console.log('>>>>>>', state, action);
            const { data: list } = action.payload;
            // console.log('>>>>>>', list);
            return state.set('list', fromJS(list));
        }
      })
}, initialState);