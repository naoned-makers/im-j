import axios from 'axios';
import { getMqttClient } from './mqtt.service';

const client = getMqttClient(`jarvis_${Math.random().toString(16).substr(2, 8)}`);

client.on('connect', async () => {
  console.log("connexion au broker");
  try {
    await client.subscribe("im/command/talk/search");
  } catch (e) {
    console.log(e.message);
    console.log(e.stack);
  }
});

const getNextTalks = async () => {
  try {
    const response = await axios.get('http://localhost:8082/talks/next');
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

export { client, getNextTalks };