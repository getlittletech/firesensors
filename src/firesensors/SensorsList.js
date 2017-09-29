import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SensorsList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          List of smoke sensors:
        </Text>
        {!!this.props.firesensors && !!this.props.firesensors.sensors && this.props.firesensors.sensors.map(sensor => {
          return (
            <Text style={styles.instructions} key={sensor.deviceId}>
              {sensor.deviceName}
            </Text>
          )
        })}
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
