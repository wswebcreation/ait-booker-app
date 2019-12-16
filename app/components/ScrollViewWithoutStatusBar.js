import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView} from 'react-navigation';

export default class ScrollViewWithoutStatusBar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
  };

  render() {
    const {children, style = {}} = this.props;

    return <ScrollView style={style}>{children}</ScrollView>;
  }
}
