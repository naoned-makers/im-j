import { observable, runInAction } from 'mobx';
import { client, getNextTalks } from '../services/event.service';
import axios from 'axios';

let index = 0;
let events;
let intervalId;
let streamIntervalId;

String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

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
    console.log(`Error retrieving next talks: ${error}`);
  }
}

fetchNextTalks();

intervalId = setInterval(async () => {
  // Fetch next talks every minute
  fetchNextTalks()
}, 60000);

streamIntervalId = setInterval(() => {
  // Make next events stream every 5 seconds
  index = index === events.length - 1 ? 0 : index + 1;
  updateStore(false);
}, 5000);

client.on('message', async (topic, payload) => {
  console.log("réception d'un message");
  try {
    let uint8array = new TextEncoder("utf-8").encode("¢");
    let response = JSON.parse(new TextDecoder("utf-8").decode(payload));

    const confs = await axios.get('http://localhost:8082/talks?company=' + response.parameter.talkcompany.replaceAll('"', ''));
    let resultat = confs.data;

    eventStore.event = {
      title: resultat.data[0].title,
      speakers: resultat.data[0].speakers.reduce((acc, current, index) => acc + `${index > 0 ? ' & ' : ''}${current.name} (${current.company ? current.company + ', ' : ''}${current.country})`, ''),
      track: resultat.data[0].category,
      format: resultat.data[0].type,
      schedule: resultat.data[0].slot.startTime,
      location: resultat.data[0].track.title
    };
    eventStore.isVocalRequest = true;

    console.log(events)
    events.map(event => console.log(event))
    // updateStore(true);
    // Disable next talks fetching
    runInAction(() => {
      clearInterval(intervalId);
      clearInterval(streamIntervalId);
      setTimeout(() => {
        // Fetch next talks 10 seconds later
        fetchNextTalks();
        // And restart next talks polling every minute
        intervalId = setInterval(async () => {
          fetchNextTalks()
        }, 60000);
        streamIntervalId = setInterval(() => {
          // Make next events stream every 5 seconds
          index = index === events.length - 1 ? 0 : index + 1;
          updateStore(false);
        }, 5000);
      }, 10000)
    })
  } catch (e) {
    console.log(e.message);
    console.log(e.stack);
  }
});

const eventStore = observable({
  event: null,
  isVocalRequest: false
});

export default eventStore;