import { capitalize } from '../utils/string.utils';
import mqtt from 'async-mqtt';

let client = mqtt.connect('ws://192.168.1.119:3000', { clientId: 'twitter_'+Math.random().toString(16).substr(2, 8)})

client.on("connect", connection);
client.on("message", message);

async function connection() {
  
    console.log("connexion au broker");
    try {
      await client.subscribe('im/command/twitter');
    } catch (e){
      console.log(e.stack);
      process.exit();
    }
}

async function message(topic, strPayLoad) {
  
    console.log("réception d'un message");
    try {
      console.log(topic);
      let response = JSON.parse(strPayLoad);
      return {
        user_name: response.user_name,
        screen_name: response.screen_name,
        text: response.text
      }
    } catch (e){
      console.log(e.stack);
      process.exit();
    }
}



/*const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';

const stringGen = (len, charset) => {
  let text = '';
  for (let i = 0; i < len; i++) {
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return text;
};

const name = () => {
  return `${capitalize(nameGen(Math.floor(Math.random() * 4) + 4, letters))} ${capitalize(nameGen(Math.floor(Math.random() * 5) + 5, letters))}`;
};

const screenName = () => {
  return `@${stringGen(Math.floor(Math.random() * 7) + 7, letters + numbers)}`;
};

const generateTweet = () => ({
  name: name(),
  screenName: screenName(),
  text: stringGen(140, letters + numbers + '      '),
  timeSinceCreation: Math.floor(Math.random() * 60)
});

const stream = (handleData) => {
  setInterval(() => handleData(generateTweet()), 12000);
};*/

export { message };