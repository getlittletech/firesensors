import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  FlatList,
  Text
} from 'react-native';

import SensorItem from './SensorItem'

import { List } from 'react-native-elements'

export default class SensorsList extends Component {

  render() {
    // get alarmed and calm sensors (also add key property)
    const alarmed = this.getAlarmed(this.props.firesensors)
    const calm = this.getCalm(this.props.firesensors)

    // combine two lists with alarmed items first
    const alarmedFirst = [...alarmed, ...calm]

    if (alarmedFirst.length > 0) {
      return (
        <FlatList
          data={alarmedFirst}
          renderItem={({item}) => <SensorItem sensor={item} />}
        />
      )
    } else {
      return <Text>No sensors detected</Text>
    }
  }

  getAlarmed(firesensors) {
    if (!!firesensors && !!firesensors.sensors) {
      return firesensors.sensors.filter((sensor) => sensor.alarmActive === true && sensor.silenced !== true).map((sensor) => {
        sensor.key = sensor.deviceId
        return sensor
      })
    } else {
      return []
    }
  }

  getCalm(firesensors) {
    if (!!firesensors && !!firesensors.sensors) {
      return firesensors.sensors.filter((sensor) => sensor.alarmActive === false || sensor.silenced === true).map((sensor) => {
        sensor.key = sensor.deviceId
        return sensor
      })
    } else {
      return []
    }
  }
}
