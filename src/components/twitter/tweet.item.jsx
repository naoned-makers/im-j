import React from 'react';
import 'font-awesome/css/font-awesome.css';

const Tweet = () => (
  <div className='pure-g' style={{ padding: '0.8em' }}>
    <div className='pure-u-1'>
      <div className='pure-u-1-24 caret'><i className='fa fa-caret-right'></i></div>
      <div className='name pure-u-6-24'>John Doe</div>
      <div className='screen-name pure-u-5-24'>@johndoe</div>
      <div className='time-since-creation pure-u-12-24' style={{ textAlign: 'right' }}>17 m</div>
    </div>
    <p className='text pure-u-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum ab sapiente eaque cumque ut quibusdam corporis, recusandae saepe architecto</p>
  </div>

);

export default Tweet;