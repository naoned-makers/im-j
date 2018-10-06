import React from 'react';
import { observer } from 'mobx-react';

const Camera = ({ store }) => (
  <img src={'data:image/jpeg;base64,'+store.img} className="w3-left w3-circle w3-margin-right" id="camera_frame" />
);

export default observer(Camera);