import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withNavigation} from 'react-navigation';
import Home from './components/Home';
import {api} from '../config/api';

function mapStateToProps(state) {
  return {
    branding: state.branding,
    rooms: state.rooms,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      fetchBranding: bindActionCreators(api.getBranding, dispatch),
      fetchRooms: bindActionCreators(api.getRooms, dispatch),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Home));
