import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
      </View>
    );
  }
}

export default Home;

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
