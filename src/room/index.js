import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Room extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Room Screen</Text>
      </View>
    );
  }
}

export default Room;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 44,
  },
});
