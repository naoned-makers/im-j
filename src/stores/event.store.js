import { observable } from 'mobx';
import { client } from '../services/event.service';
import axios from 'axios';


String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};


client.on('message', async (topic, payload) => {
  console.log("réception d'un message");
  try {
    let uint8array = new TextEncoder("utf-8").encode("¢");
    let response = JSON.parse(new TextDecoder("utf-8").decode(payload));

    const confs = await axios.get('http://localhost:8082/talks?company=' + response.parameter.talkcompany.replaceAll('"', ''));
    let resultat = confs.data;
    eventStore.schedule = resultat.data[0].slot.startTime;
    eventStore.location = resultat.data[0].track.title;
    eventStore.speakers = resultat.data[0].speakers[0].name;
    eventStore.title = resultat.data[0].title;
    eventStore.track = resultat.data[0].category;
    eventStore.format = resultat.data[0].type;
   } catch (e){
    console.log(e.stack);
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