import axios from 'axios';
import moment from 'moment';
import { find as findInStorage, store } from '../utils/storage.utils';

const getWeather = async () => {
  try {
    if (moment().diff(moment(Number.parseInt(findInStorage('jarvis.weather', 11), 10)), 'minutes') > 10) {
      const weather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${process.env.OWM_CITYID}&appid=${process.env.OWM_APPID}&units=metric&lang=fr`);
      store('jarvis.weather', {
        age: moment().format('x'),
        data: weather.data
      })
    }
    return {
      temperature: findInStorage('jarvis.weather').data.main.temp,
      conditionId: findInStorage('jarvis.weather').data.weather[0].icon,
      pressure: findInStorage('jarvis.weather').data.main.pressure,
      humidity: findInStorage('jarvis.weather').data.main.humidity
    }
  } catch (error) {
    throw error;
  }
}

export { getWeather };