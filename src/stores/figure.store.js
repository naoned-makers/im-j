import { observable } from 'mobx';
import { client } from '../services/figure.service';

const triggerFeedback = (action, duration) => {
  action = true;
  setTimeout(() => action = false, duration);
}

client.on('message', function (topic, payload) {
  switch (topic) {
    case 'im/command/head':
      triggerFeedback(figureStore.headMoving, 3000);
      break;
    case 'im/command/head/facetrackmove':
      triggerFeedback(figureStore.headMoving, 1000);
      break;
    case 'im/command/helmet':
      triggerFeedback(figureStore.helmetMoving, 3000);
      break;
    case 'im/command/helmet/next':
      triggerFeedback(figureStore.helmetMoving, 1000);
      break;
    case 'im/command/leftarm/move':
      triggerFeedback(figureStore.leftArmMoving, 3000);
      break;
    case 'im/command/leftarm/next':
      triggerFeedback(figureStore.leftArmMoving, 1000);
      break;
    case 'im/command/rightarm/move':
    case 'im/command/rightarm/up':
    case 'im/command/rightarm/down':
      triggerFeedback(figureStore.rightArmMoving, 3000);
      break;
    case 'im/command/rightarm/next':
      triggerFeedback(figureStore.rightArmMoving, 1000);
      break;
    case 'im/command/lefthand/move':
      triggerFeedback(figureStore.leftHandMoving, 3000);
      break;
    case 'im/command/lefthand/next':
      triggerFeedback(figureStore.leftHandMoving, 1000);
      break;
    case 'im/command/righthand/move':
      triggerFeedback(figureStore.rightHandMoving, 3000);
      break;
    case 'im/command/righthand/next':
      triggerFeedback(figureStore.rightHandMoving, 1000);
      break;
    case 'im/command/energy/on':
      triggerFeedback(figureStore.energyOn, 3000);
      break;
  }
});

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