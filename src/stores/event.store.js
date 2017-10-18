import { observable } from 'mobx';
import { client, getNextTalks } from '../services/event.service';
import axios from 'axios';


String.prototype.replaceAll = function (search, replacement) {
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
  } catch (e) {
    console.log(e.message);
    console.log(e.stack);
  }
});

let index = 0;
let events;

const updateStore = (isVocalRequest) => {
  eventStore.event = {
    title: events[index].title,
    speakers: events[index].speakers.reduce((acc, current, index) => acc + `${index > 0 ? ' & ' : ''}${current.name} (${current.company ? current.company + ', ' : ''}${current.country})`, ''),
    track: events[index].category,
    format: events[index].type,
    schedule: events[index].slot.startTime,
    location: events[index].track.title
  };
  eventStore.isVocalRequest = isVocalRequest;
}

const fetchNextTalks = async () => {
  try {
    events = await getNextTalks();
    updateStore(false);
  } catch (error) {
    runInAction(() => {
      console.log(`Error retrieving next talks: ${error}`);
    })
  }
}

fetchNextTalks();

setInterval(async () => {
  fetchNextTalks()
}, 60000);

const eventStore = observable({
  event: null,
  isVocalRequest: false
});

setInterval(() => {
  index = index === events.length - 1 ? 0 : index + 1;
  updateStore(false);
}, 5000);

export default eventStore;