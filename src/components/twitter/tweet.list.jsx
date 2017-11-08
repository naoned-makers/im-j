import React from 'react';
import { observer } from 'mobx-react';
import Tweet from './tweet.item';

const TweetList = ({ store }) => (
  <section style={{ paddingLeft: '9rem', display: 'flex', flexDirection: 'column', flex: '1' }}>
    <header className='right-align'>Latest Tweets</header>
    <div className='pure-u-1' style={{ height: '1px', marginTop: '0.5rem', backgroundColor: 'rgba(2, 255, 255, 1)' }}>
    </div>
    <div className='pure-u-1' style={{ height: '1px', marginTop: '0.5rem', marginLeft: '-6rem', backgroundColor: 'rgba(2, 255, 255, 1)' }}>
    </div>
    <div className='pure-u-1' style={{ height: '1px', marginTop: '-0.05rem', marginLeft: '-0.5rem', backgroundColor: 'rgba(2, 255, 255, 1)' }}>
    </div>
    <div className='pure-u-1 tweet-list' style={{ marginTop: '0.5rem', flex: '1' }}>
      {store.map((tweet, index) => {
        return <Tweet key={index} tweet={tweet} />
      })
      }
    </div>
  </section>
);

export default observer(TweetList);