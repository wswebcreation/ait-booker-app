import {combineReducers} from 'redux';
import authenticationReducer from '../localAuthentication/duck/reducer';
import brandingReducer from '../home/duck/reducer';

export const reducers = combineReducers({
  authentication: authenticationReducer,
  branding: brandingReducer,
});
