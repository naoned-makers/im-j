import { observable } from 'mobx';
import { client } from '../services/twitter.service';
import moment from 'moment';

client.on('message', async (topic, payload) => {
  try {
    const response = JSON.parse(payload);
    twitterStore.unshift({
      screenName: `@${response.screen_name}`,
      text: response.text,
      timeSinceCreation: moment(response.created_at).locale('fr').format('LT')
    });
    twitterStore.pop();
  } catch (e) {
    process.exit();
  }
});

const twitterStore = observable([{
  screenName: '@johndoe',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum ab sapiente eaque cumque ut quibusdam corporis, recusandae saepe architecto',
  timeSinceCreation: '17 m'
}, {
  screenName: '@johndoe',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum ab sapiente eaque cumque ut quibusdam corporis, recusandae saepe architecto',
  timeSinceCreation: '17 m'
}, {
  screenName: '@grenaudin',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum ab sapiente eaque cumque ut quibusdam corporis, recusandae saepe architecto',
  timeSinceCreation: '17 m'
}, {
  screenName: '@grenaudin',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum ab sapiente eaque cumque ut quibusdam corporis, recusandae saepe architecto',
  timeSinceCreation: '17 m'
}, {
  screenName: '@grenaudin',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum ab sapiente eaque cumque ut quibusdam corporis, recusandae saepe architecto',
  timeSinceCreation: '17 m'
}]);

export default twitterStore;