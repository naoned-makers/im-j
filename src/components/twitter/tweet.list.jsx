import React from 'react';
import Tweet from './tweet.item';

const TweetList = () => (
  <section>
    <header className='right-align'>Latest Tweets</header>
    <div className='pure-u-1' style={{ backgroundColor: 'rgba(109, 204, 221, 1)', position: 'relative', height: '1px', bottom: '-0.5em' }}>
    </div>
    <div className='pure-u-1' style={{ backgroundColor: 'rgba(109, 204, 221, 1)', position: 'relative', left: '-3em', height: '1px', bottom: '0.4em' }}>
    </div>
    <div className='pure-u-1' style={{ backgroundColor: 'rgba(109, 204, 221, 1)', position: 'relative', height: '1px', bottom: '1.6em', right: '10px' }}>
    </div>
    <div className='pure-u-1 tweet-list' style={{ top: '-2.5em', position: 'relative' }}>
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  </section>
);

export default TweetList;