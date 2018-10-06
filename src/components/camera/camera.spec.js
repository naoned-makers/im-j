import React from 'react';
import { Camera } from './';
import renderer from 'react-test-renderer';
import ReactShallowRenderer from 'react-test-renderer/shallow';

describe('Camera frame', () => {
  test('should render', () => {
    const store = {
      img: ''
    };

    const component = renderer.create(
      <Camera store={store}/>
    ).toJSON();

    expect(component.type).toBe('img');
  })
});