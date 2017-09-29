import React, { Component } from 'react'

import { ListItem } from 'react-native-elements'

import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import MqttClient from '../utils/mqttclient/MqttClient'

export default class SensorsItem extends Component {

  render() {
    if (this.props.sensor.alarmActive === true && this.props.sensor.silenced !== true) {
      return (
        <ListItem
          leftIcon={{name: "error", color: "red"}}
          title={this.props.sensor.deviceName}
          subtitle={this.props.sensor.roomName}
          rightIcon={{name: 'thumb-up', color: "green"}}
          onPressRightIcon={this.silence}
        />
      )
    } else {
      return (
        <ListItem
          leftIcon={{name: "settings-remote"}}
          title={this.props.sensor.deviceName}
          subtitle={this.props.sensor.roomName}
          hideChevron={true}
        />
      )
    }
  }

  silence() {
    MqttClient.publishUnderControl()
  }
}
