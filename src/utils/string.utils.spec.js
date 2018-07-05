import { capitalize, find } from './string.utils';

describe('Capitalize function', () => {
  test('transforms first string letter uppercase', () => {
    const capitalized = capitalize('string');

    expect(capitalized).toBe('String');
  });
});

describe('Find function', () => {
  test('states a text contains no keyword', () => {
    const notFound = find('bla bli blo');
    expect(notFound).toBeUndefined();
  });

  test('states a text doesn\'t contain any keyword', () => {
    const notFound = find('bla bli blo', ['blu']);
    expect(notFound).toBeUndefined();
  });

  test('states a text contains a keyword', () => {
    let found = find('bla bli blo', ['li']);
    expect(found).toBe('li');

    found = find('bla bli blo', ['blu', 'l']);
    expect(found).toBe('l');
  });
});