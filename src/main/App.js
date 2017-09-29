import React, { Component } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import mainReducer from './reducer'

import FireSensorsListContainer from '../firesensors/SensorsListContainer'

import MqttClient from '../utils/mqttclient/MqttClient'

import Header from '../components/header'

const store = createStore(
  mainReducer
)

import { View, Text, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header text="SENSORS"/>
          <FireSensorsListContainer />
        </View>
      </Provider>
    );
  }
}

MqttClient.setup(store.dispatch)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
})
