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

    const component = renderer.create(
      <Clock />
    ).toJSON();
  })
});