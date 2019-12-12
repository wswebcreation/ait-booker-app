import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Admin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Admin Screen</Text>
      </View>
    );
  }
}

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
