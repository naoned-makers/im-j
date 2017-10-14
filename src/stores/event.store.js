import { observable } from 'mobx';

const eventStore = observable({
  title: 'TensorFlow Wide & Deep: Advanced Classification the easy way et lorem ipsum dolor',
  speakers: 'Romain Guy  (Google, USA) & Chet Haase (Google, USA) etlorem isum dolor',
  track: 'Discovery',
  format: 'Conference',
  schedule: '14:30',
  location: 'Salle de l\'Eléphant'
});

export default eventStore;