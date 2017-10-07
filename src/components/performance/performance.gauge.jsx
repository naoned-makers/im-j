import React from 'react';
import { observer } from 'mobx-react';

const Gauge = ({ label, rate }) => (
  <div className='pure-g'>
    <label htmlFor='gauge' className='pure-u-1-5'>{label}</label>
    <div id='gauge' className='gauge pure-u-4-5'>
      <div className='value' style={{ width: `${rate * 100}%` }}></div>
    </div>
  </div>
);

export default observer(Gauge);