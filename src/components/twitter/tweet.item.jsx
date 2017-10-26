import React from 'react';
import { observer } from 'mobx-react';
import { observable, autorun, computed, action } from 'mobx';
import 'font-awesome/css/font-awesome.css';

const Tweet = ({ tweet }) => (
  <div style={{ padding: '0.8rem', opacity: tweet.highlight ? '1' : '0.5' }}>
    <div className='pure-u-1'>
      <div className=' pure-u-4-5' style={{ fontSize: '1.5rem' }}>
        <i className='fa fa-caret-right' style={{ fontSize: '1.5rem', marginLeft: '-2.5rem', paddingRight: '2rem' }}></i>
        {`@${tweet.screenName}`}
      </div>
      <div className='pure-u-1-5' style={{ textAlign: 'right' }}>{tweet.creationTime}</div>
    </div>
    <p className='text pure-u-1' style={{ marginBottom: '0.5rem', height: '3.7rem', overflow: 'hidden' }}>{tweet.text}</p>
  </div>
);

export default observer(Tweet);