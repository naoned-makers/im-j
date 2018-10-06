import { observable, action } from 'mobx';
import { client } from '../services/camera.service';


client.on('message', (topic, payload) => {
  const data = JSON.parse(payload);
  switch (topic) {
    case 'im/command/head/facetrackstart':
      cameraStore.img = data.face;
    default:
      break;
  }
});

const cameraStore = observable({
  img: null
});

export default cameraStore;