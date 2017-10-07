import React from 'react';
import { observer } from 'mobx-react';

const Clock = ({ store }) => (
  <div id='date_time'>
    <div id='date' className='semi-arc e4'>
      <div className='semi-arc-2 e4-1'>
        <div className='counterspin4'></div>
      </div>
      <div className='day-number'>{store.dayOfMonth}</div>
      <div className='month'>{store.monthName}</div>
    </div>

    <div id='time' className='arc e1'>
      <div className='hour-minutes'>{`${store.hours}:${store.minutes}`}</div>
      <div className='seconds'>{store.seconds}</div>
      <div className='day-name'>{store.dayName}</div>
    </div>
  </div>
);

export default observer(Clock);