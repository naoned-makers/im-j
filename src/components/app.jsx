import React from 'react';
import { Performance } from './performance';
import { Clock } from './clock';
import { TweetList } from './twitter';
import { Event } from './event';
import { Body } from './figure';
import { Weather } from './weather';
import { observer } from 'mobx-react';
import performanceStore from '../stores/performance.store';
import clockStore from '../stores/clock.store';
import weatherStore from '../stores/weather.store';
import eventStore from '../stores/event.store';
import './app.css';

const App = () => (
  <div className='pure-g'>
    <div className='pure-u-1 pure-u-xl-7-24 layout-left'>
      <Clock store={clockStore} />
      <Weather store={weatherStore} />
      <div className='layout-auto-fill'></div>
      <Performance store={performanceStore} />
    </div>
    <div className='pure-u-1 pure-u-xl-8-24'>
      <Body />
    </div>
    <div className='pure-u-1 pure-u-xl-9-24 layout-right'>
      <TweetList />
      <div className='layout-auto-fill'></div>
      <Event store={eventStore} />
    </div>
  </div>
);

export default observer(App);