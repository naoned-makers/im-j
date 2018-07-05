import { store, find } from './storage.utils';

describe('Store function', () => {
  test('saves stringified to local storage', () => {
    store('key', { value: 'value' });

    const storedItem = localStorage.getItem('key');
    expect(storedItem).toBe('{"value":"value"}');
    expect(JSON.parse(storedItem)).toEqual({ value: 'value' });
  });
});

describe('Find function', () => {
  test('finds and restores parsed from local storage', () => {
    store('key', { value: 'value' });

    let storedItem = find('key');
    expect(storedItem).toEqual({ value: 'value' });

    storedItem = find('key', 'defaultValue');
    expect(storedItem).toEqual({ value: 'value' });
  });

  test('returns default value from local storage', () => {
    let unknown = find('unknown');
    expect(unknown).toBeNull();

    unknown = find('unknown', 'defaultValue');
    expect(unknown).toBe('defaultValue');
  });
});