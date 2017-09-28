import * as constants from './constants'

export function fireSensorsReceived(sensors) {
  return {
    type: constants.FIRE_SENSORS_RECEIVED,
    payload: sensors
  }
}
