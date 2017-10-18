import React from 'react';
import { observer } from 'mobx-react';

const Event = ({ store }) => store.event ? (
  <section style={{ paddingLeft: '9rem', paddingTop: '1.5rem' }}>
    <header className='right-align'>{store.isVocalRequest ? 'Requested event' : 'Next events'}</header>
    <div className='pure-u-1 event-title-underline-1'></div>
    <div className='pure-u-1 event-title-underline-2'></div>
    <div className='pure-u-1 event-title-underline-3'></div>
    <div className='pure-u-1 event-border' style={{ marginTop: '-2.5rem' }}>
      <div className='pure-g event-detail-panel'>
        <div className='pure-u-1'>
          <div className='title' style={{ fontSize: '1.5rem' }}><i className='fa fa-caret-right' style={{ fontSize: '1.5rem', marginLeft: '-2.5rem', paddingRight: '2rem' }}></i>{store.event.title}</div>
        </div>
        <p className='description pure-u-1'>{store.event.speakers}</p>
      </div>
      <div className='pure-u-1'>
        <div className='pure-u-1-2 event-location'>#{store.event.track} #{store.event.format}</div>
        <div className='pure-u-1-2 event-location right-align'>{store.event.schedule} {store.event.location}</div>
      </div>
    </div>
  </section>
) : null;

export default observer(Event);