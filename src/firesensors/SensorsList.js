import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SensorsList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          List of smoke sensors
        </Text>
        <Text style={styles.instructions}>
          sensor 1, sensor 2, etc.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
