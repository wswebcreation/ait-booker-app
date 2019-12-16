import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WINDOW_WIDTH} from '../../config/constants';
import {SCREENS} from '../../config/router';

// @TODO: Both images have different rations, they need to be consistent and the api needs to return the ratio. For now I take 1.5
const ratio = 1.5;

export default class RoomSummary extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
  };

  render() {
    const {description, image, onPress, type} = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={() => onPress()}>
        <View>
          <Image
            style={{
              height: (WINDOW_WIDTH - 40) / ratio,
              width: WINDOW_WIDTH - 40,
            }}
            source={{uri: image}}
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>{type}</Text>
          <Text style={styles.text}>{description}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  description: {
    paddingBottom: 20,
    paddingTop: 20,
  },
  text: {
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
