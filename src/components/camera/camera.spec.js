import React from 'react';
import { Kinect } from './';
import renderer from 'react-test-renderer';
import ReactShallowRenderer from 'react-test-renderer/shallow';

describe('Camera frame', () => {
  test('should render', () => {
    const component = renderer.create(
      <Camera />
    ).toJSON();

    expect(component.type).toBe('img');
  })
});