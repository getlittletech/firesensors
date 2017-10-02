import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
  UIManager,
  LayoutAnimation
} from 'react-native';

import SensorItem from './SensorItem'

import { List } from 'react-native-elements'

import { PropTypes } from 'prop-types';

export default class SensorsList extends Component {

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  render() {
    // get alarmed and calm sensors (also add key property)
    const alarmed = this.getAlarmed(this.props.firesensors)
    const calm = this.getCalm(this.props.firesensors)

    // combine two lists with alarmed items first
    const alarmedFirst = [...alarmed, ...calm]

    if (alarmedFirst.length > 0) {
      return (
        <List>
          {
            alarmedFirst.map((sensor) => <SensorItem sensor={sensor} key={sensor.deviceId} />)
          }
        </List>
      )
    } else {
      return <Text>No sensors detected</Text>
    }
  }

  getAlarmed(firesensors) {
    if (!!firesensors && !!firesensors.sensors) {
      return firesensors.sensors.filter((sensor) => sensor.alarmActive === true && sensor.silenced !== true)
    } else {
      return []
    }
  }

  getCalm(firesensors) {
    if (!!firesensors && !!firesensors.sensors) {
      return firesensors.sensors.filter((sensor) => sensor.alarmActive === false || sensor.silenced === true)
    } else {
      return []
    }
  }
}

SensorsList.propTypes = {
  firesensors: PropTypes.object
}
