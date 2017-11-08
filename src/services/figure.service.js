import { getMqttClient } from './mqtt.service';

const client = getMqttClient(`figure_${Math.random().toString(16).substr(2, 8)}`);

client.on('connect', () => {
  client.subscribe('im/command/head');
  client.subscribe('im/command/head/next');
  client.subscribe('im/command/head/facetrackmove')
  client.subscribe('im/command/helmet');
  client.subscribe('im/command/helmet/next');
  client.subscribe('im/command/helmet/open');
  client.subscribe('im/command/helmet/close');
  client.subscribe('im/command/leftarm/move');
  client.subscribe('im/command/leftarm/next');
  client.subscribe('im/command/rightarm/move');
  client.subscribe('im/command/rightarm/next');
  client.subscribe('im/command/rightarm/up');
  client.subscribe('im/command/rightarm/down');
  client.subscribe('im/command/lefthand/move');
  client.subscribe('im/command/lefthand/next');
  client.subscribe('im/command/righthand/move');
  client.subscribe('im/command/righthand/next');
  client.subscribe('im/command/energy/on');
});

export { client };