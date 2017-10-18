import mqtt from 'mqtt';
import asyncMqtt from 'async-mqtt';

const getMqttClient = (clientId) => mqtt.connect(`ws://${process.env.MQTT_HOST}:${process.env.MQTT_PORT}`, { clientId });
const getAsyncMqttClient = (clientId) => asyncMqtt.connect(`ws://${process.env.MQTT_HOST}:${process.env.MQTT_PORT}`, { clientId });

export { getMqttClient, getAsyncMqttClient };