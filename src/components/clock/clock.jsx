import React, { Component } from 'react';
import { format } from 'date-fns';
import { capitalize } from '../../utils/string.utils';

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = this.extractDate(new Date());
  }

  extractDate = (date) => ({
    hours: format(date, 'HH'),
    minutes: format(date, 'mm'),
    seconds: format(date, 'ss'),
    dayName: capitalize(format(date, 'EEEE')),
    dayOfMonth: format(date, 'do'),
    monthName: capitalize(format(date, 'MMMM'))
  });

  componentWillMount = () => this.intervalID = setInterval(() => {
    this.setState(this.extractDate(new Date()));
  }, 1000);

  componentWillUnmount = () => clearInterval(this.intervalID);

  render = () => (
    <div id='date_time'>
      <div id='date' className='semi-arc e4'>
        <div className='semi-arc-2 e4-1'>
          <div className='counterspin4'></div>
        </div>
        <div className='day-number'>{this.state.dayOfMonth}</div>
        <div className='month'>{this.state.monthName}</div>
      </div>

      <div id='time' className='arc e1'>
        <div className='hour-minutes'>{`${this.state.hours}:${this.state.minutes}`}</div>
        <div className='seconds'>{this.state.seconds}</div>
        <div className='day-name'>{this.state.dayName}</div>
      </div>
    </div>
  );

}

export default Clock;