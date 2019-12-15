import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import MyStatusBar, {STATUS_BAR_HEIGHT} from './StatusBar';
import {ScrollView} from 'react-navigation';

export default class ScrollViewWithStatusBar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
  };

  render() {
    const {children, style = {}} = this.props;
    return (
      <View>
        <MyStatusBar />
        <ScrollView style={[style, styles.container]}>{children}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: STATUS_BAR_HEIGHT,
  },
});
