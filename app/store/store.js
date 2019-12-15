// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducers} from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const rootReducer = (state, action) => {
  // @TODO: If the user have successfully signed out and ended his/her session, then reset all state to remove cached data of the previous session

  return reducers(state, action);
};

export const store = createStoreWithMiddleware(rootReducer);
