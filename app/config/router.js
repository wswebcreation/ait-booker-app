import React from 'react';
import Home from '../home';
import localAuthentication from '../localAuthentication';
import Admin from '../admin';
import Room from '../room';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const SCREENS = {
  ADMIN: 'Admin',
  HOME: 'Home',
  LOCAL_AUTHENTICATION: 'Personal',
  ROOM: 'Room',
};

const HomeStack = createStackNavigator(
  {
    [SCREENS.HOME]: {screen: Home},
    [SCREENS.ROOM]: {screen: Room},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const UnauthenticatedScreens = createStackNavigator(
  {
    [SCREENS.LOCAL_AUTHENTICATION]: {screen: localAuthentication},
  },
  {
    headerMode: 'none',
  },
);

const AuthenticatedInitialScreens = createStackNavigator(
  {
    [SCREENS.ADMIN]: {screen: Admin},
  },
  {
    headerMode: 'none',
  },
);

const localAuthenticationStack = createSwitchNavigator(
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
    [SCREENS.HOME]: HomeStack,
    [SCREENS.LOCAL_AUTHENTICATION]: localAuthenticationStack,
  },
  {
    /* Other configuration remains unchanged */
  },
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export {SCREENS};
export default AppContainer;
