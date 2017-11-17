import React from 'react';
import { Performance } from './';
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

describe('Performance panel', () => {
  test('should render', () => {
    const store = {
      cpuRate: 0,
      messagesRate: 0,
      memoryRate: 0
    };

    const component = renderer.create(
      <Performance store={store} />
    ).toJSON();
  })

  test('should fail rendering', () => {
    expect(() => {
      const component = renderer.create(
        <Performance />
      ).toJSON();
    }).toThrow(TypeError);
    expect(spy).toHaveBeenCalledTimes(1);
  })
});