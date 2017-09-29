import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SensorsItem extends Component {

  render() {
    return (
      <View style={styles.cell}>
        <Text style={styles.text}>
          {this.props.sensor.deviceName}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
  },
  text: {

  }
});
