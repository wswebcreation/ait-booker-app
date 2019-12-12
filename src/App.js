/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';

import AppContainer from './config/router';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <AppContainer />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
