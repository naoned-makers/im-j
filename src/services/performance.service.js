import { getMqttClient } from './mqtt.service';

const client = getMqttClient(`perf_${Math.random().toString(16).substr(2, 8)}`);

client.on('connect', () => {
  client.subscribe('im/event/rpiheart/usage');
  client.subscribe('im/#');
});

export { client };