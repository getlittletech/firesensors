import mqtt from '../../../lib/react-native-mqtt'
import { fireSensorsReceived } from '../../firesensors/actions'
import { Platform } from 'react-native';

let subscribeTopic = "user/device/00000000-0000-0000-0000-000000000007/#"

class MqttClient {

  setup(dispatch) {
    // For device: specify the host of a computer. Or a real Mosquitto server.

    // For emulator
    let host = '127.0.0.1'

    if (Platform.OS === 'android') {
      // localhost for android
      host = '10.0.2.2'
    }

    mqtt.createClient({
      port: 1883,
      auth: false,
      keepalive: 45,
      tls: false,
      selfSignedCertificates: false,
      host,
      clientId: 'test'
    }).then((client) => {

      this.client = client
      this.dispatch = dispatch

      client.on('closed', () => {
        console.log('mqtt.event.closed')

      });

      client.on('error', (msg) => {
        console.log('mqtt.event.error', msg)
        // TODO: handle, e.g. indicate it in the app

      });

      client.on('message', (msg) => {
        console.log('mqtt.event.message', msg)

        const jsonMsg = JSON.parse(msg.data)
        const sensors = jsonMsg.sensors

        dispatch(fireSensorsReceived(sensors))
      });

      client.on('connect', () => {
        console.log('connected')

        client.subscribe(subscribeTopic, 0)
      });

      client.connect();

    }).catch(function(err){
      console.log(err)
    });
  }

  /* called when user presses a button */
  publishUnderControl() {
    let payload = '{ "command": "SITUATION_UNDER_CONTROL" }'
    let topic = "user/device/00000000-0000-0000-0000-000000000007/fire/command"
    this.client.publish(topic, payload, 0, false);
  }

}

export default new MqttClient()
