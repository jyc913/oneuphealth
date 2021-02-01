import {combineReducers} from 'redux';
import usersReducer from './users.reducer';

const mainReducer =combineReducers({
    usersReducer
})
export default mainReducer;