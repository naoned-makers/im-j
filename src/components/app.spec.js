import React from 'react';
import App from './app';
import renderer from 'react-test-renderer';
import ReactShallowRenderer from 'react-test-renderer/shallow';

describe('App', () => {
  test('should render', () => {
    const component = renderer.create(
      <App />
    ).toJSON();
  })
});