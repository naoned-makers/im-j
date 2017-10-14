import { observable } from 'mobx';
import mqtt from 'mqtt';

const client = mqtt.connect('ws://192.168.1.119:3000', { clientId: `jarvis_${Math.random().toString(16).substr(2, 8)}` });

client.on('connect', function () {
  console.log('connect');
  client.subscribe('im/command/head');
  client.subscribe('im/command/head/facetrackmove')
  client.subscribe('im/command/helmet');
  client.subscribe('im/command/leftarm/move');
  client.subscribe('im/command/rightarm/move');
  client.subscribe('im/command/lefthand/move');
  client.subscribe('im/command/righthand/move');
  client.subscribe('im/command/energy/on');
})

client.on('message', function (topic, payload) {
  console.log(topic)
  console.log(JSON.parse(payload))
  switch (topic) {
    case 'im/command/head':
    case 'im/command/head/facetrackmove':
      console.log('Tete en mouvement !')
      figureStore.headMoving = true;
      setTimeout(() => {
        figureStore.headMoving = false;
      }, 3000);
      break;
    case 'im/command/helmet':
      console.log('Visiere en mouvement !')
      figureStore.helmetMoving = true;
      setTimeout(() => {
        figureStore.helmetMoving = false;
      }, 3000);
      break;
    case 'im/command/leftarm/move':
      console.log('Bras gauche en mouvement !')
      figureStore.leftArmMoving = true;
      setTimeout(() => {
        figureStore.leftArmMoving = false;
      }, 3000);
      break;
    case 'im/command/rightarm/move':
      console.log('Bras droit en mouvement !')
      figureStore.rightArmMoving = true;
      setTimeout(() => {
        figureStore.rightArmMoving = false;
      }, 3000);
      break;
    case 'im/command/lefthand/move':
      console.log('Main gauche en mouvement !')
      figureStore.leftHandMoving = true;
      setTimeout(() => {
        figureStore.leftHandMoving = false;
      }, 3000);
      break;
    case 'im/command/righthand/move':
      console.log('Main droite en mouvement !')
      figureStore.rightHandMoving = true;
      setTimeout(() => {
        figureStore.rightHandMoving = false;
      }, 3000);
      break;
    case 'im/command/energy/on':
      console.log('Energie activée !')
      figureStore.energyOn = true;
      setTimeout(() => {
        figureStore.energyOn = false;
      }, 3000);
      break;
  }
})

const figureStore = observable({
  headMoving: false,
  helmetMoving: false,
  leftArmMoving: false,
  rightArmMoving: false,
  leftHandMoving: false,
  rightHandMoving: false,
  energyOn: false
});

export default figureStore;