import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LocalAuthentication from './components/LocalAuthentication';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocalAuthentication);
