import { observer } from 'mobx-react';
import React from 'react';
import Head from './head';
import Torso from './torso';
import Energy from './energy';
import LeftArm from './arm.left';
import LeftHand from './hand.left';
import RightArm from './arm.right';
import RightHand from './hand.right';
import Legs from './legs';

const Body = ({ store }) => (
  <svg version='1.2' baseProfile='tiny' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 3100 4900' overflow='scroll' xmlSpace='preserve' >
    <filter id='blur-filter'>
      <feGaussianBlur in='SourceGraphic' stdDeviation='30' />
    </filter>
    <Head isTurning={store.headMoving} isHelmetRising={store.helmetMoving} />
    <Torso />
    <Energy isOn={store.energyOn} />
    <LeftArm isMoving={store.leftArmMoving} />
    <LeftHand isMoving={store.leftHandMoving} />
    <RightArm isMoving={store.rightArmMoving} />
    <RightHand isMoving={store.rightHandMoving} />
    <Legs />
  </svg>
);

export default observer(Body);