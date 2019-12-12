import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Admin from './components/Admin';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
