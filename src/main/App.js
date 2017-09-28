import React, { Component } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import mainReducer from './reducer'

import FireSensorsList from '../firesensors/SensorsList'

const store = createStore(
  mainReducer
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FireSensorsList />
      </Provider>
    );
  }
}
