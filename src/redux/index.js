import {combineReducers} from 'redux';
import user from './user';
import userdata from './userdata';
import attendance from './attendance';

export default combineReducers({user, userdata, attendance});
