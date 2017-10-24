import { observable, action } from 'mobx';
import { client } from '../services/performance.service';

let messagesCounter = 0;

client.on('message', (topic, payload) => {
  const data = JSON.parse(payload);
  switch (topic) {
    case 'im/event/rpiheart/usage':
      performanceStore.cpuRate = Number.parseFloat(data.cpuUsage) / 100;
      performanceStore.memoryRate = Number.parseFloat(data.memory.percentage) / 100;
    default:
      messagesCounter++;
      break;
  }
});

setInterval(() => {
  performanceStore.messagesRate = messagesCounter <= 10 ? messagesCounter / 10 : 1;
  messagesCounter = 0;
}, 5000);

const performanceStore = observable({
  cpuRate: 0,
  messagesRate: 0,
  memoryRate: 0
});

export default performanceStore;