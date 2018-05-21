import React, { Component } from 'react';
import moment from 'moment';
import { capitalize } from '../../utils/string.utils';

class Clock extends Component {

  constructor(props) {
    super(props);
    moment.locale('en');
    this.state = this.formatDate(moment());
  }

  formatDate = (m) => ({
    hours: m.format('HH'),
    minutes: m.format('mm'),
    seconds: m.format('ss'),
    dayName: capitalize(m.format('dddd')),
    dayOfMonth: m.format('Do'),
    monthName: capitalize(m.format('MMMM'))
  });

  componentWillMount = () => this.intervalID = setInterval(() => {
    this.setState(this.formatDate(moment()));
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