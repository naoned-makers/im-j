import React from 'react';
import { observer } from 'mobx-react';
import { getConditionComponent } from './conditions';

const Weather = ({ store }) => (
  <div className='container'>
    <span className='title-left-align'>
      {getConditionComponent(store.conditionId)}
      {`${store.temperature}°C`}
    </span>
  </div>
);

export default observer(Weather);