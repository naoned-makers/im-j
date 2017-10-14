import React from 'react';
import { observer } from 'mobx-react';
import { getConditionComponent } from './conditions';

const Weather = ({ store }) => (
  <div style={{ display: 'flex' }}>
    <div className='pure-u-1-2' style={{ textAlign: 'right', margin: 'auto' }}>
      {getConditionComponent(store.conditionId)}
    </div>
    <div className='pure-u-1-6' style={{ textAlign: 'center', margin: 'auto 0.5em', fontSize: '3em' }}>
      {`${store.temperature}°C`}
    </div>
    <div className='pure-u-1-3' style={{ margin: 'auto' }}>
      <div>PRESSURE {store.pressure} hpa</div>
      <div>HUMIDITY {store.humidity}%</div>
    </div>
  </div>
);

export default observer(Weather);