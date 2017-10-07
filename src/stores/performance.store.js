import { observable, action } from 'mobx';

let battery;

if ("getBattery" in navigator) {
  navigator.getBattery().then((batteryManager) => {
    battery = batteryManager;
    battery.addEventListener('levelchange', updateLoadLevel);

    console.log(`Current Battery Level: ${battery.level}`);

    performanceStore.loadRate = battery.level;
  });
} else {
  battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
  battery.addEventListener('levelchange', updateLoadLevel);
  performanceStore.loadRate = battery.level;
}

const updateLoadLevel = (battery) => {
  console.log(`New Battery Level: ${battery.target.level}`);
  performanceStore.loadRate = battery.target.level;
}

const performanceStore = observable({
  cpuRate: 0.75,
  loadRate: 0,
  memoryRate: 0.25
});

export default performanceStore;