import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {IS_IPHONEX, IS_IOS} from '../config/constants';
import {colors} from '../config/colors';

// eslint-disable-next-line no-nested-ternary
const STATUS_BAR_HEIGHT = IS_IOS
  ? IS_IPHONEX
    ? 44
    : 20
  : StatusBar.currentHeight || 0;

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

MyStatusBar.defaultProps = {
  backgroundColor: colors.white,
};

MyStatusBar.propTypes = {
  backgroundColor: PropTypes.string,
};

const styles = StyleSheet.create({
  statusBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100,
    width: '100%',
    height: STATUS_BAR_HEIGHT,
  },
});

export {STATUS_BAR_HEIGHT};
export default MyStatusBar;
