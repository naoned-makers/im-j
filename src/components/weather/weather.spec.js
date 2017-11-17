import React from 'react';
import { Weather } from './';
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

describe('Weather info', () => {
  test('should render', () => {
    const store = {
      conditionId: '',
      temperature: 0,
      pressure: 0,
      humidity: 0
    };

    const component = renderer.create(
      <Weather store={store} />
    ).toJSON();
  })

  test('should fail rendering', () => {
    expect(() => {
      const component = renderer.create(
        <Weather />
      ).toJSON();
    }).toThrow(TypeError);
    expect(spy).toHaveBeenCalledTimes(1);
  })
});