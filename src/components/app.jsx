import React from 'react';
import { Performance } from './performance';
import { Clock } from './clock';
import { TweetList } from './twitter';
import { Body } from './figure';
import { Weather } from './weather';
//import { Kinect } from './kinect';
import { Camera } from "./camera"
import { observer } from 'mobx-react';
import performanceStore from '../stores/performance.store';
import weatherStore from '../stores/weather.store';
import figureStore from '../stores/figure.store';
import twitterStore from '../stores/twitter.store';
import cameraStore from "../stores/camera.store"
import './app.css';

const App = () => (
  <div className='pure-g'>
    <div className='pure-u-1 pure-u-xl-8-24 layout-left'>
      <Clock />
      <Weather store={weatherStore} />
  { /* <Kinect/> */ }
      <Camera store={cameraStore} />
      <Performance store={performanceStore} />
    </div>
    <div className='pure-u-1 pure-u-xl-8-24'>
      <Body store={figureStore} />
    </div>
    <div className='pure-u-1 pure-u-xl-8-24 layout-right'>
      <TweetList store={twitterStore} />
    </div>
  </div>
);

export default observer(App);