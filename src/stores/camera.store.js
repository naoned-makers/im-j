import { observable } from 'mobx';
import { client } from '../services/camera.service';

const cameraStore = observable({
  img: null
});

client.on('message', (topic, payload) => {
  const data = JSON.parse(payload);
  switch (topic) {
    case 'im/command/head/facetrackstart':
      cameraStore.img = data.face;
      break;
    default:
      break;
  }
});

export default cameraStore;