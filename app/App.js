/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './config/router';
import {store} from './store/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
