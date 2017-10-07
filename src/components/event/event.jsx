import React from 'react';

const Event = ({ store }) => (
  <section>
    <header className='event-title right-align'>Next event</header>
    <div className='pure-u-1 event-title-underline-1'></div>
    <div className='pure-u-1 event-title-underline-2'></div>
    <div className='pure-u-1 event-title-underline-3'></div>
    <div className='pure-u-1 event-border'>
      <div className='pure-g event-detail-panel'>
        <div className='pure-u-1'>
          <div className='pure-u-1-24 event-caret'>
            <i className='fa fa-caret-right'></i>
          </div>
          <div className='title pure-u-11-24'>{store.title}</div>
          <div className='pure-u-12-24 right-align'>{store.schedule}</div>
        </div>
        <p className='description pure-u-1'>{store.description}</p>
      </div>
      <div className='pure-u-1 event-location right-align'>{store.location}</div>
    </div>
  </section>
);

export default Event;