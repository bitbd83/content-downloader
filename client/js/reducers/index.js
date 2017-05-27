import {combineReducers} from 'redux';
import contents from './contentReducer';

import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    contents: contents,
    ajaxCallsInProgress: ajaxCallsInProgress
});

export default rootReducer;
