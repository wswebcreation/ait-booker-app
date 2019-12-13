import {combineReducers} from 'redux';
import authenticationReducer from '../localAuthentication/duck/reducer';

const reducers = combineReducers({
  authenticationReducer: authenticationReducer,
});

export {reducers};
