import React from 'react';
import Head from './head';
import Torso from './torso';
import Energy from './energy';
import LeftArm from './arm.left';
import LeftHand from './hand.left';
import RightArm from './arm.right';
import RightHand from './hand.right';
import Legs from './legs';

//3061.4 5442.5

const Body = () => (
  <svg version='1.2' baseProfile='tiny' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 3100 4900' overflow='scroll' xmlSpace='preserve' >
    <filter id='blur-filter'>
      <feGaussianBlur in='SourceGraphic' stdDeviation='30' />
    </filter>
    <Head />
    <Torso />
    <Energy />
    <LeftArm />
    <LeftHand />
    <RightArm />
    <RightHand />
    <Legs />
  </svg>
);

export default Body;