import mqtt from 'mqtt';

const getMqttClient = (clientId) => mqtt.connect('ws://192.168.1.119:3000', { clientId });

export { getMqttClient };