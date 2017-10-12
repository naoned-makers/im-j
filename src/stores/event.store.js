import { observable } from 'mobx';
import axios from 'axios';
import mqtt from 'async-mqtt';


let client = mqtt.connect('ws://192.168.1.119:3000', { clientId: 'jarvis_'+Math.random().toString(16).substr(2, 8)})

client.on("connect", doStuff);
client.on("message", doStuff2);
async function doStuff() {
  
    console.log("Starting");
    try {
      await client.subscribe("im/command/talk/search");
    } catch (e){
      // Do something about it!
      console.log(e.stack);
      process.exit();
    }
}

/*client.on('connect', function () { 
  console.log('connect');
  client.subscribe("im/command/talk/search");
})*/

async function doStuff2(topic, strPayLoad) {
  
    console.log("Starting");
    try {
      console.log('je viens de recevoir un message');
      console.log(topic);
      let response = JSON.parse(strPayLoad);
      var instance = axios.create();
      const confs = await instance.get('http://localhost:8080/confs?company=' + response.parameter.talkcompany);
      console.log(confs);
      //eventStore.description = confs.data[0].abstract;
      eventStore.schedule = confs.data[0].date
      //eventStore.title = confs.data[0].lenght
      eventStore.location = confs.data[0].room[0].name
      eventStore.speakers = confs.data[0].speaker[0].name
      eventStore.title = confs.data[0].title
      //eventStore
      
    } catch (e){
      // Do something about it!
      console.log(e.stack);
      process.exit();
    }
}

/*client.on('message', function async (topic, strPayLoad) {
  console.log('je viens de recevoir un message');
  console.log(topic);
  console.log(JSON.parse(strPayLoad));
  const weather = await axios.get(`http://localhost:8080/confs?company=`);

})*/

const eventStore = observable({
  title: 'TensorFlow Wide & Deep: Advanced Classification the easy way',
  speakers: 'Romain Guy (Google, USA) & Chet Haase (Google, USA) etlorem isum dolor',
  track: 'Discovery',
  format: 'Conference',
  schedule: '14:30',
  location: 'Salle de l\'Eléphant'
});

export default eventStore;