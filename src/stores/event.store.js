import { observable } from 'mobx';
import { client } from '../services/twitter.service';
import axios from 'axios';


client.on('message', async (topic, payload) => {
  console.log("réception d'un message");
  try {
    console.log(topic);
    let response = JSON.parse(strPayLoad);
    var instance = axios.create();
    const confs = await instance.get('http://localhost:8080/talks?company=' + response.parameter.talkcompany);
    eventStore.schedule = confs.data[0].date
    eventStore.location = confs.data[0].room[0].name
    eventStore.speakers = confs.data[0].speaker[0].name
    eventStore.title = confs.data[0].title
  } catch (e){
    console.log(e.stack);
    process.exit();
  }
});

const eventStore = observable({
  title: 'TensorFlow Wide & Deep: Advanced Classification the easy way',
  speakers: 'Romain Guy (Google, USA) & Chet Haase (Google, USA) etlorem isum dolor',
  track: 'Discovery',
  format: 'Conference',
  schedule: '14:30',
  location: 'Salle de l\'Eléphant'
});

export default eventStore;