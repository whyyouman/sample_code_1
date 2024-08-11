// reducers/index.js

import { combineReducers } from 'redux';
// import yourReducer from './yourReducer'; // Import your reducer
import authReducer from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
