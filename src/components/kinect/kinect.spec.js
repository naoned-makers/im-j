import React from 'react';
import { Kinect } from './';
import renderer from 'react-test-renderer';
import ReactShallowRenderer from 'react-test-renderer/shallow';

describe('Kinect frame', () => {
  test('should render', () => {
    const component = renderer.create(
      <Kinect />
    ).toJSON();

    expect(component.type).toBe('iframe');
  })
});