import React from 'react';
import { getConditionComponent } from './';
import renderer from 'react-test-renderer';
import ReactShallowRenderer from 'react-test-renderer/shallow';

describe('Weather', () => {
  test('should render clear sky day', () => {
    const clearSkyDay = getConditionComponent('01d');
    renderer.create(clearSkyDay).toJSON();
    expect(clearSkyDay.type.name).toBe('ClearSkyDay');
  });

  test('should render clear sky night', () => {
    const clearSkyNight = getConditionComponent('01n');
    renderer.create(clearSkyNight).toJSON();
    expect(clearSkyNight.type.name).toBe('ClearSkyNight');
  });

  test('should render few clouds day', () => {
    const fewCloudsDay = getConditionComponent('02d');
    renderer.create(fewCloudsDay).toJSON();
    expect(fewCloudsDay.type.name).toBe('FewCloudsDay');
  });

  test('should render few clouds night', () => {
    const fewCloudsNight = getConditionComponent('02n');
    renderer.create(fewCloudsNight).toJSON();
    expect(fewCloudsNight.type.name).toBe('FewCloudsNight');
  });

  test('should render scattered clouds', () => {
    const scatteredCloudsDay = getConditionComponent('03d');
    const scatteredCloudsNight = getConditionComponent('03n');
    renderer.create(scatteredCloudsDay).toJSON();
    renderer.create(scatteredCloudsNight).toJSON();
    expect(scatteredCloudsDay.type.name).toBe('ScatteredClouds');
    expect(scatteredCloudsNight.type.name).toBe('ScatteredClouds');
  });

  test('should render broken clouds', () => {
    const brokenCloudsDay = getConditionComponent('04d');
    const brokenCloudsNight = getConditionComponent('04n');
    renderer.create(brokenCloudsDay).toJSON();
    renderer.create(brokenCloudsNight).toJSON();
    expect(brokenCloudsDay.type.name).toBe('BrokenClouds');
    expect(brokenCloudsNight.type.name).toBe('BrokenClouds');
  });

  test('should render shower rain', () => {
    const showerRainDay = getConditionComponent('09d');
    const showerRainNight = getConditionComponent('09n');
    renderer.create(showerRainDay).toJSON();
    renderer.create(showerRainNight).toJSON();
    expect(showerRainDay.type.name).toBe('ShowerRain');
    expect(showerRainNight.type.name).toBe('ShowerRain');
  });

  test('should render rain day', () => {
    const rainDay = getConditionComponent('10d');
    renderer.create(rainDay).toJSON();
    expect(rainDay.type.name).toBe('RainDay');
  });

  test('should render rain night', () => {
    const rainNight = getConditionComponent('10n');
    renderer.create(rainNight).toJSON();
    expect(rainNight.type.name).toBe('RainNight');
  });

  test('should render thunderstorm', () => {
    const thunderstormDay = getConditionComponent('11d');
    const thunderstormNight = getConditionComponent('11n');
    renderer.create(thunderstormDay).toJSON();
    renderer.create(thunderstormNight).toJSON();
    expect(thunderstormDay.type.name).toBe('Thunderstorm');
    expect(thunderstormNight.type.name).toBe('Thunderstorm');
  });

  test('should render snow', () => {
    const snowDay = getConditionComponent('13d');
    const snowNight = getConditionComponent('13n');
    renderer.create(snowDay).toJSON();
    renderer.create(snowNight).toJSON();
    expect(snowDay.type.name).toBe('Snow');
    expect(snowNight.type.name).toBe('Snow');
  });

  test('should render mist', () => {
    const mistDay = getConditionComponent('50d');
    const mistNight = getConditionComponent('50n');
    renderer.create(mistDay).toJSON();
    renderer.create(mistNight).toJSON();
    expect(mistDay.type.name).toBe('Mist');
    expect(mistNight.type.name).toBe('Mist');
  });
});
