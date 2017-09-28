import * as constants from './constants'

export default function firesensors(state = {
  hasReceived: false,
  sensors: [],
  isMqttError: false
}, action) {
  switch (action.type) {
    case constants.FIRE_SENSORS_RECEIVED:
      return Object.assign({}, state, {
        hasReceived: true,
        sensors: action.payload,
        isMqttError: false
      })
    // TODO: handle error from MqttClient
    /*case constants.MQTT_ERROR:
      return Object.assign({}, state, {
        isMqttError: true
      })*/
    default:
      return state
  }
}
