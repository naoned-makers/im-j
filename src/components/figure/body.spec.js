import React from 'react';
import { Body } from './';
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

describe('Figure', () => {
  test('should render without feedback', () => {
    const store = {
      headMoving: false,
      helmetMoving: false,
      leftArmMoving: false,
      rightArmMoving: false,
      leftHandMoving: false,
      rightHandMoving: false,
      energyOn: false
    };

    const component = renderer.create(
      <Body store={store} />
    ).toJSON();
  })

  test('should render with feedback', () => {
    const store = {
      headMoving: true,
      helmetMoving: true,
      leftArmMoving: true,
      rightArmMoving: true,
      leftHandMoving: true,
      rightHandMoving: true,
      energyOn: true
    };

    const component = renderer.create(
      <Body store={store} />
    ).toJSON();
  })

  test('should fail rendering', () => {
    expect(() => {
      const component = renderer.create(
        <Body />
      ).toJSON();
    }).toThrow(TypeError);
    expect(spy).toHaveBeenCalledTimes(1);
  })
});