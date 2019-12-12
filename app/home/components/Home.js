import React, {Component} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {SCREENS} from '../../config/router';

export default class Home extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <Button
          title="Open room 1"
          onPress={() => navigation.navigate(SCREENS.ROOM, {id: 1})}
        />
        <Button
          title="Open room 2"
          onPress={() => navigation.navigate(SCREENS.ROOM, {id: 2})}
        />
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
