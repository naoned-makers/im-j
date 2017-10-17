import mqtt from 'mqtt';

const getMqttClient = (clientId) => mqtt.connect(`ws://${process.env.MQTT_HOST}:${process.env.MQTT_PORT}`, { clientId });

export { getMqttClient };