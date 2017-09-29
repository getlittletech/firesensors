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

import {
  View, Text
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Header text="Our sensors:"/>
          <FireSensorsListContainer />
        </View>
      </Provider>
    );
  }
}

MqttClient.setup(store.dispatch)
