import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WINDOW_WIDTH} from '../../config/constants';

// @TODO: Current image is 2736x1511 => 1.81 ratio. Need to get better images and sizes
const ratio = 1.81;

export default class HotelDescription extends Component {
  static propTypes = {
    logoUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  render() {
    const {description, logoUrl} = this.props;

    return (
      <View>
        <View style={styles.logoContainer}>
          <Image
            style={{
              height: WINDOW_WIDTH / ratio,
              width: WINDOW_WIDTH,
            }}
            source={{uri: logoUrl}}
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.text}>{description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 20,
  },
  description: {
    padding: 20,
  },
  text: {
    fontSize: 16,
  },
});
