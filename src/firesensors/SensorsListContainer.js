import { connect } from 'react-redux'

import React from 'react'
import SensorsList from './SensorsList'

function mapStateToProps(state) {
  return {
    firesensors: state.firesensors
  }
}

const SensorsListContainer = connect(
  mapStateToProps
)(SensorsList)

export default SensorsListContainer
