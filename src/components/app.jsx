import React from 'react';
import { Performance } from './performance';
import { Clock } from './clock';
import { TweetList } from './twitter';
import { Event } from './event';
import { Body } from './figure';
import { Weather } from './weather';
import { Kinect } from './kinect';
import { observer } from 'mobx-react';
import performanceStore from '../stores/performance.store';
import clockStore from '../stores/clock.store';
import weatherStore from '../stores/weather.store';
import eventStore from '../stores/event.store';
import figureStore from '../stores/figure.store';
import twitterStore from '../stores/twitter.store';
import './app.css';

const App = () => (
  <div className='pure-g'>
    <div className='pure-u-1 pure-u-xl-8-24 layout-left'>
      <Clock store={clockStore} />
      <Weather store={weatherStore} />
      <div className='layout-auto-fill'></div>
      <Kinect />
      <Performance store={performanceStore} />
    </div>
    <div className='pure-u-1 pure-u-xl-8-24'>
      <Body store={figureStore} />
    </div>
    <div className='pure-u-1 pure-u-xl-8-24 layout-right'>
      <TweetList store={twitterStore} />
      <div className='layout-auto-fill'></div>
      <Event store={eventStore} />
    </div>
  </div>
);

export default observer(App);