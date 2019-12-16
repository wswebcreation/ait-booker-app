import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WINDOW_WIDTH} from '../../config/constants';
import {colors} from '../../config/colors';

// @TODO: Both images have different rations, they need to be consistent and the api needs to return the ratio. For now I take 1.5
const ratio = 1.5;

export default class RoomSummary extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  };

  render() {
    const {description, image, onPress, price, type} = this.props;

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
        <View style={styles.descriptionContainer}>
          <View style={styles.description}>
            <Text style={styles.title}>{type}</Text>
            <Text style={styles.text}>{description}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={[styles.price]}>£ {price}</Text>
            <Text style={styles.night}>per night</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 20,
    paddingTop: 20,
  },
  description: {
    flex: 1,
    paddingRight: 15,
  },
  text: {
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  priceContainer: {
    backgroundColor: '#6d95da',
    borderRadius: 5,
    padding: 10,
    width: 100,
    height: 65,
  },
  price: {
    fontSize: 22,
    color: colors.white,
    textAlign: 'center',
  },
  night: {
    fontSize: 12,
    color: colors.white,
    textAlign: 'center',
  },
});
