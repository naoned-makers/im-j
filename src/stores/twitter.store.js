import { observable } from 'mobx';
import { stream } from '../services/twitter.service';

const switchDisplayName = (tweet) => {
  tweet.displayName = tweet.displayName === tweet.name ? tweet.screenName : tweet.name;
}

stream((data) => {
  console.log(data);
  const tweet = { ...data, displayName: data.name };
  twitterStore.unshift(tweet);
  twitterStore.pop();
});

const twitterStore = observable([{
  displayName: 'John Doe',
  name: 'John Doe',
  screenName: '@johndoe',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum ab sapiente eaque cumque ut quibusdam corporis, recusandae saepe architecto',
  timeSinceCreation: '17 m'
}, {
  displayName: 'Franck Wlodarezack',
  name: 'Franck Wlodarezack',
  screenName: '@johndoe',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum ab sapiente eaque cumque ut quibusdam corporis, recusandae saepe architecto',
  timeSinceCreation: '17 m'
}, {
  displayName: 'Guillaume Renaudin',
  name: 'Guillaume Renaudin',
  screenName: '@grenaudin',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum ab sapiente eaque cumque ut quibusdam corporis, recusandae saepe architecto',
  timeSinceCreation: '17 m'
}]);

setInterval(() => {
  twitterStore.map((tweet) => {
    switchDisplayName(tweet)
  })
}, 5000);

export default twitterStore;