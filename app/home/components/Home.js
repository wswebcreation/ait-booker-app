import React, {Component} from 'react';
import {Button, Text, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {SCREENS} from '../../config/router';
import ScrollViewWithStatusBar from '../../components/ScrollViewWithStatusBar';
import HotelDescription from './HotelDescription';

export default class Home extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      fetchBranding: PropTypes.func.isRequired,
    }).isRequired,
    branding: PropTypes.shape({
      map: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
      }).isRequired,
      logoUrl: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      }).isRequired,
      showModal: PropTypes.bool.isRequired,
      errors: PropTypes.array.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.props.actions.fetchBranding();
  }

  render() {
    const {branding, navigation} = this.props;
    const {map, logoUrl, description, name, contact} = branding;

    return (
      <ScrollViewWithStatusBar>
        {logoUrl === '' ? (
          <Text>Loading.....</Text>
        ) : (
          <View>
            <HotelDescription description={description} logoUrl={logoUrl} />
            <Button
              title="Open room 1"
              onPress={() => navigation.navigate(SCREENS.ROOM, {id: 1})}
            />
            <Button
              title="Open room 2"
              onPress={() => navigation.navigate(SCREENS.ROOM, {id: 2})}
            />
          </View>
        )}
      </ScrollViewWithStatusBar>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
