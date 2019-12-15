import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {ScrollView} from 'react-navigation';

export default class ScrollViewWithoutStatusBar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
  };

  render() {
    const {children, style = {}} = this.props;
    return (
      <View>
        <ScrollView style={style}>{children}</ScrollView>
      </View>
    );
  }
}
