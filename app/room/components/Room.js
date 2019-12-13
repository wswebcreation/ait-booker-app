import React, {Component} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

export default class Room extends Component {
  render() {
    const {navigation} = this.props;
    const roomID = navigation.getParam('id', -1);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Room Screen for room {roomID}</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
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
