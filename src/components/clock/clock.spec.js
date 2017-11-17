import React from 'react';
import { Clock } from './';
import renderer from 'react-test-renderer';
import ReactShallowRenderer from 'react-test-renderer/shallow';

let spy;

beforeEach(() => {
  spy = jest.spyOn(console, 'error').mockImplementation(() => '')
});

afterEach(() => {
  spy.mockReset();
  spy.mockClear();
})

describe('Clock', () => {
  test('should render', () => {
    const store = {
      dayOfMonth: '1st',
      monthName: 'January',
      hours: '00',
      minutes: '00',
      seconds: '00',
      dayName: 'Monday'
    };

    const component = renderer.create(
      <Clock store={store} />
    ).toJSON();
  })

  test('should fail rendering', () => {
    expect(() => {
      const component = renderer.create(
        <Clock />
      ).toJSON();
    }).toThrow(TypeError);
    expect(spy).toHaveBeenCalledTimes(1);
  })
});