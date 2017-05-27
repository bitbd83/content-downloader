import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function contentReducer(state = initialState.contents, action) {
    switch (action.type) {
        case types.LOAD_CONTENTS_SUCCESS:
            return action.contents;
        default:
            return state;
    }
}
