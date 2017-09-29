import React, { Component } from 'react'

import {
  StyleSheet,
  View
} from 'react-native';

import SensorItem from './SensorItem'

export default class SensorsList extends Component {

  render() {
    return (
      <View style={styles.container}>
        {!!this.props.firesensors && !!this.props.firesensors.sensors && this.props.firesensors.sensors.map(sensor => {
          return (
            <SensorItem sensor={sensor} key={sensor.deviceId} />
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});
