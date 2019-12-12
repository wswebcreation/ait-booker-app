import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withNavigation} from 'react-navigation';
import Room from './components/Room';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Room));
