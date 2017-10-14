import React from 'react';
import { observer } from 'mobx-react';
import Tweet from './tweet.item';

const TweetList = ({ store }) => (
  <section style={{ paddingLeft: '9rem' }}>
    <header className='right-align'>Latest Tweets</header>
    <div className='pure-u-1' style={{ height: '1px', marginTop: '0.5rem', backgroundColor: 'rgba(2, 255, 255, 1)' }}>
    </div>
    <div className='pure-u-1' style={{ height: '1px', marginTop: '-0.4rem', marginLeft: '-6rem', backgroundColor: 'rgba(2, 255, 255, 1)' }}>
    </div>
    <div className='pure-u-1' style={{ height: '1px', marginTop: '-1.6rem', marginLeft: '-0.5rem', backgroundColor: 'rgba(2, 255, 255, 1)' }}>
    </div>
    <div className='pure-u-1 tweet-list' style={{ marginTop: '-2.5rem' }}>
      {store.map((tweet, index) => {
        return <Tweet key={index} tweet={tweet} />
      })}
    </div>
  </section>
);

export default observer(TweetList);