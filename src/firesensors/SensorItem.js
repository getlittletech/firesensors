import React, { Component } from 'react'

import { ListItem } from 'react-native-elements'

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SensorsItem extends Component {

  render() {
    return (
      <ListItem
        leftIcon={{name: "settings-remote"}}
        title={this.props.sensor.deviceName}
      />
    );
  }
}
