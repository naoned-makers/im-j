import { observable, action } from 'mobx';
import moment from 'moment';
import { capitalize } from '../utils/string.utils';

moment.locale('en');

setInterval(() => {
  const d = moment();
  clockStore.hours = d.format('HH');
  clockStore.minutes = d.format('mm');
  clockStore.seconds = d.format('ss');
  clockStore.dayName = capitalize(d.format('dddd'));
  clockStore.dayOfMonth = d.format('Do');
  clockStore.monthName = capitalize(d.format('MMMM'));
}, 1000);

const clockStore = observable({
  hours: moment().format('HH'),
  minutes: moment().format('mm'),
  seconds: moment().format('ss'),
  dayName: capitalize(moment().format('dddd')),
  dayOfMonth: moment().format('Do'),
  monthName: capitalize(moment().format('MMMM'))
});

export default clockStore;