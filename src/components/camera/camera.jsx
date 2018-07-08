import React from 'react';
import { observer } from 'mobx-react';

const Camera = ({ store }) => (
  <img src={"data:image/jpeg;charset=utf-8;base64,"+store.img} className="w3-left w3-circle w3-margin-right " width="500px" height="375px" />
);

export default observer(Camera);