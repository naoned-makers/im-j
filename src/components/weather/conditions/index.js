import React from 'react';
import ClearSkyNight from './clear.sky.night';
import ClearSkyDay from './clear.sky.day';
import FewCloudsDay from './few.clouds.day';
import FewCloudsNight from './few.clouds.night';
import ScatteredClouds from './scattered.clouds';
import BrokenClouds from './broken.clouds';
import ShowerRain from './shower.rain';
import RainDay from './rain.day';
import RainNight from './rain.night';
import Thunderstorm from './thunderstorm';
import Snow from './snow';
import Mist from './mist';

const getConditionComponent = (conditionId) => {
  switch (conditionId) {
    case '01d':
      return <ClearSkyDay />;
    case '01n':
      return <ClearSkyNight />;
    case '02d':
      return <FewCloudsDay />;
    case '02n':
      return <FewCloudsNight />;
    case '03d':
    case '03n':
      return <ScatteredClouds />;
    case '04d':
    case '04n':
      return <BrokenClouds />;
    case '09d':
    case '09n':
      return <ShowerRain />;
    case '10d':
      return <RainDay />;
    case '10n':
      return <RainNight />;
    case '11d':
    case '11n':
      return <Thunderstorm />;
    case '13d':
    case '13n':
      return <Snow />;
    case '50d':
    case '50n':
      return <Mist />;
    default:
      return null;
  }
};

export { getConditionComponent };
