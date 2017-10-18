import { getAsyncMqttClient } from './mqtt.service';

const client = getAsyncMqttClient(`jarvis_${Math.random().toString(16).substr(2, 8)}`);

client.on('connect', async () => {
    console.log("connexion au broker");
    try {
      await client.subscribe("im/command/talk/search");
    } catch (e){
      console.log(e.stack);
      process.exit();
    }
});

export { client };