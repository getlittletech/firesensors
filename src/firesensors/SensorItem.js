import React, { Component } from 'react'

import { ListItem, Button } from 'react-native-elements'

import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import MqttClient from '../utils/mqttclient/MqttClient'

export default class SensorsItem extends Component {

  render() {
    if (this.props.sensor.alarmActive === true && this.props.sensor.silenced !== true) {
      let button = <View><Button title='Silence' onPress={this.silence} style={{margin: 0, padding: 0}}/></View>
      return (
        <ListItem
          containerStyle={{paddingLeft: 5}}
          leftIcon={{name: "error", color: "red"}}
          title={this.props.sensor.deviceName}
          subtitle={this.props.sensor.roomName}
          badge={{ element: button }}
          hideChevron={true}
          titleContainerStyle={{marginLeft: 7}}
          subtitleContainerStyle={{marginLeft: 7}}
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
