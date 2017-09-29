import React, { Component } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import mainReducer from './reducer'

import FireSensorsListContainer from '../firesensors/SensorsListContainer'

import MqttClient from '../utils/mqttclient/MqttClient'

const store = createStore(
  mainReducer
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FireSensorsListContainer />
      </Provider>
    );
  }
}

MqttClient.setup(store.dispatch)
