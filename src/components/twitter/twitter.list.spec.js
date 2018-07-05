import React from 'react';
import { TweetList } from './';
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

describe('Twitter panel', () => {
  test('should render without tweet', () => {
    const component = renderer.create(
      <TweetList store={[]} />
    ).toJSON();
  })

  test('should render one tweet', () => {
    const store = [{
      screenName: 'screen_name',
      text: 'text',
      creationTime: '00:00',
      highlight: false
    }];

    const component = renderer.create(
      <TweetList store={store} />
    ).toJSON();
  })

  test('should render five tweets', () => {
    const store = [];
    for (let i = 0; i < 5; i++) {
      store.push({
        screenName: `screen_name${i}`,
        text: `text${i}`,
        creationTime: `0${i}:00`,
        highlight: i % 2 == 0
      })
    }

    const component = renderer.create(
      <TweetList store={store} />
    ).toJSON();
  })

  test('should fail rendering', () => {
    expect(() => {
      const component = renderer.create(
        <TweetList />
      ).toJSON();
    }).toThrow(TypeError);
    expect(spy).toHaveBeenCalledTimes(1);
  })
});