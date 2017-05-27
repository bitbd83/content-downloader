import * as types from './actionTypes';
import contentApi from '../api/mockContentApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

// Action Creators
export function loadContentsSuccess(contents) {
    console.log("action creators:loadContentsSuccess - Called Action LOAD_CONTENTS_SUCCESS");
    return { type: types.LOAD_CONTENTS_SUCCESS, contents: contents };
}

export function loadContents() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return contentApi.getAllContents().then((contents) => {
            dispatch(loadContentsSuccess(contents));
        }).catch(error => {
            throw(error);
        });
    };
}

export function fetchContent(content) {
    console.log(`action creators:fetchContent - Called fetchContent [content: ${JSON.stringify(content)}]`);
    return function(dispatch, getState) {
        dispatch(beginAjaxCall());
        return contentApi.fetchContent(content).then(fetchedContent => {
            console.log(`action creators:fetchContent - Response from API [fetchedContent: ${JSON.stringify(fetchedContent)}]`);
            fetchedContent.id ? dispatch(updateContentSuccess(fetchedContent)) : dispatch(createContentSuccess(fetchedContent));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}
