import React from 'react';
import Home from '../home';
import Login from '../login';
import Admin from '../admin';
import Room from '../room';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const HomeStack = createStackNavigator(
  {
    Home: {screen: Home},
    Room: {screen: Room},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const UnauthenticatedScreens = createStackNavigator(
  {
    Login: {screen: Login},
  },
  {
    headerMode: 'none',
  },
);

const AuthenticatedInitialScreens = createStackNavigator(
  {
    Admin: {screen: Admin},
  },
  {
    headerMode: 'none',
  },
);

const LoginStack = createSwitchNavigator(
  {
    UnauthenticatedScreens: {screen: UnauthenticatedScreens},
    AuthenticatedInitialScreens: {screen: AuthenticatedInitialScreens},
  },
  {
    initialRouteName: 'UnauthenticatedScreens',
  },
);

const AppSwitchNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Login: LoginStack,
  },
  {
    /* Other configuration remains unchanged */
  },
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
