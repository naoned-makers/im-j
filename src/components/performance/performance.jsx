import React from 'react';
import Gauge from './performance.gauge';
import { observer } from 'mobx-react';

const Performance = ({ store }) => (
  <div className='container'>
    <span className='title-left-align'>Performances</span>
    <Gauge label='CPU' rate={store.cpuRate} />
    <Gauge label='Messages' rate={store.messagesRate} />
    <Gauge label='Memory' rate={store.memoryRate} />
  </div>
);

export default observer(Performance);