import React, { Component } from 'react'

import {
  StyleSheet,
  View
} from 'react-native';

import SensorItem from './SensorItem'

import { List } from 'react-native-elements'

export default class SensorsList extends Component {

  render() {
    return (
      <List containerStyle={{marginBottom: 20}}>
        {!!this.props.firesensors && !!this.props.firesensors.sensors && this.props.firesensors.sensors.map(sensor => {
          return (
            <SensorItem sensor={sensor} key={sensor.deviceId} />
          )
        })}
      </List>
    );
  }
}
