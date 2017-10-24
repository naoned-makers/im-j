import { observable } from 'mobx';
import { client } from '../services/twitter.service';
import moment from 'moment';

client.on('message', async (topic, payload) => {
  try {
    const response = JSON.parse(payload);
    twitterStore.unshift({
      screenName: `@${response.screen_name}`,
      text: response.text,
      timeSinceCreation: moment(response.created_at).locale('fr').format('LT'),
      highlight: process.env.TWITTER_KEYWORD && response.text.toUpperCase().includes(process.env.TWITTER_KEYWORD.toUpperCase())
    });
    if (twitterStore.length > 5) {
      twitterStore.pop();
    }
    localStorage.setItem('im.tweets', JSON.stringify(twitterStore));
  } catch (e) {
    process.exit();
  }
});

if (!localStorage.getItem('im.tweets')) {
  localStorage.setItem('im.tweets', JSON.stringify([{
    screenName: '@SCxPro',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum ab sapiente eaque cumque ut quibusdam corporis, recusandae saepe architecto',
    timeSinceCreation: '17 m'
  }, {
    screenName: '@batiot',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum ab sapiente eaque cumque ut quibusdam corporis, recusandae saepe architecto',
    timeSinceCreation: '17 m',
    highlight: true
  }, {
    screenName: '@thedireizh',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum ab sapiente eaque cumque ut quibusdam corporis, recusandae saepe architecto',
    timeSinceCreation: '17 m'
  }, {
    screenName: '@grenaudin',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum ab sapiente eaque cumque ut quibusdam corporis, recusandae saepe architecto',
    timeSinceCreation: '17 m'
  }, {
    screenName: '@lynchmaniacPL',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum ab sapiente eaque cumque ut quibusdam corporis, recusandae saepe architecto',
    timeSinceCreation: '17 m'
  }]));
}

const twitterStore = observable(localStorage.getItem('im.tweets') ? JSON.parse(localStorage.getItem('im.tweets')) : []);

export default twitterStore;