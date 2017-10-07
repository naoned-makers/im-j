import { observable } from 'mobx';

const twitterStore = observable({
  title: 'Etlorem Ipsum Dolor',
  schedule: '14:30',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero.',
  location: 'Salle de l\'Eléphant'
});

export default twitterStore;