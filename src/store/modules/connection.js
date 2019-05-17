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
            const { data: list } = action.payload;
            if ( list ) {
                const newobj = Object.keys(list[0]).reduce((aac, cur) => {
                    aac[cur] = undefined;
                    return aac
                  }, {});
                  list.push(newobj);
            }
            return state.set('list', fromJS(list));
        }
    })
}, initialState);