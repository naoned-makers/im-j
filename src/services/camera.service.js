import { getMqttClient } from './mqtt.service';

const client = getMqttClient(`figure_${Math.random().toString(16).substr(2, 8)}`);

client.on('connect', () => {
  client.subscribe('im/command/head/facetrackstart');
});

export { client };