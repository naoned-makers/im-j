import { observable } from 'mobx';
import { client } from '../services/figure.service';

const triggerFeedback = (action, duration) => {
  figureStore[action] = true;
  setTimeout(() => figureStore[action] = false, duration);
}

client.on('message', function (topic, payload) {
  switch (topic) {
    case 'im/command/head':
      triggerFeedback('headMoving', 3000);
      break;
    case 'im/command/head/next':
      triggerFeedback('headMoving', 1000);
      break;
    case 'im/command/head/facetrackmove':
      triggerFeedback('headMoving', 500);
      break;
    case 'im/command/helmet':
      triggerFeedback('helmetMoving', 3000);
      break;
    case 'im/command/helmet/next':
    case 'im/command/helmet/open':
    case 'im/command/helmet/close':
      triggerFeedback('helmetMoving', 1000);
      break;
    case 'im/command/leftarm/move':
      triggerFeedback('leftArmMoving', 3000);
      break;
    case 'im/command/leftarm/next':
      triggerFeedback('leftArmMoving', 1000);
      break;
    case 'im/command/rightarm/move':
    case 'im/command/rightarm/up':
    case 'im/command/rightarm/down':
      triggerFeedback('rightArmMoving', 3000);
      break;
    case 'im/command/rightarm/next':
      triggerFeedback('rightArmMoving', 1000);
      break;
    case 'im/command/lefthand/move':
      triggerFeedback('leftHandMoving', 3000);
      break;
    case 'im/command/lefthand/next':
      triggerFeedback('leftHandMoving', 1000);
      break;
    case 'im/command/righthand/move':
      triggerFeedback('rightHandMoving', 3000);
      break;
    case 'im/command/righthand/next':
      triggerFeedback('rightHandMoving', 1000);
      break;
    case 'im/command/energy/on':
      triggerFeedback('energyOn', 3000);
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