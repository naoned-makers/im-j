import { observable, action } from 'mobx';
import { client } from '../services/performance.service';

client.on('message', (topic, payload) => {
  const data = JSON.parse(payload);
  performanceStore.cpuRate = Number.parseFloat(data.cpuUsage) / 100;
  performanceStore.loadRate = (Number.parseInt(data.disk.total) - Number.parseInt(data.disk.free)) / Number.parseInt(data.disk.total);
  performanceStore.memoryRate = Number.parseFloat(data.memory.percentage) / 100;
});

const performanceStore = observable({
  cpuRate: 0,
  loadRate: 0,
  memoryRate: 0
});

export default performanceStore;