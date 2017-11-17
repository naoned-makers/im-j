import clockStore from './clock.store';
import moment from 'moment';

moment.locale('en');

describe('Clock Store', () => {
  test('provides current time', () => {
    const now = moment();
    expect(clockStore.hours).toBe(now.format('HH'));
    expect(clockStore.minutes).toBe(now.format('mm'));
    expect(clockStore.seconds).toBe(now.format('ss'));
    expect(clockStore.dayName).toBe(now.format('dddd'));
    expect(clockStore.dayOfMonth).toBe(now.format('Do'));
    expect(clockStore.monthName).toBe(now.format('MMMM'));
  })
});