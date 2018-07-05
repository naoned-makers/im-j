import { observable } from 'mobx';
import { client } from '../services/twitter.service';
import { find } from '../utils/string.utils';
import { find as findInStorage, store } from '../utils/storage.utils';
import { format, parse } from 'date-fns';

client.on('message', async (topic, payload) => {
  try {
    const response = JSON.parse(payload);
    twitterStore.unshift({
      screenName: response.screen_name,
      text: response.text,
      creationTime: format(parse(response.created_at, 'EEE LLL dd HH:mm:ss xx YYYY', new Date()), 'HH:mm'),
      highlight: process.env.TWITTER_KEYWORDS && find(response.text, process.env.TWITTER_KEYWORDS.split(','))
    });
    if (twitterStore.length > 5) {
      twitterStore.pop();
    }
    store('jarvis.tweets', twitterStore);
  } catch (e) {
    process.exit();
  }
});

const twitterStore = observable(findInStorage('jarvis.tweets', []));

export default twitterStore;