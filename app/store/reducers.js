import {combineReducers} from 'redux';
import authenticationReducer from '../localAuthentication/duck/reducer';
import brandingReducer from '../home/duck/reducer';
import roomsReducer from '../room/duck/reducer';

export const reducers = combineReducers({
  authentication: authenticationReducer,
  branding: brandingReducer,
  rooms: roomsReducer,
});
