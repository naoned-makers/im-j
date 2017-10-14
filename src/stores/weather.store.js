import { observable, action, runInAction } from 'mobx';
import { getWeather } from '../services/weather.service';

const fetchWeather = async () => {
  try {
    const weather = await getWeather();
    runInAction(() => {
      weatherStore.temperature = Math.round(weather.temperature);
      weatherStore.conditionId = weather.conditionId;
      weatherStore.pressure = weather.pressure;
      weatherStore.humidity = weather.humidity;
    });
  } catch (error) {
    runInAction(() => {
      console.log(`Error retrieving weather data: ${error}`);
    })
  }
}

fetchWeather();

const weatherStore = observable({
  conditionId: '',
  temperature: 0,
  pressure: 0,
  humidity: 0
});

setInterval(() => {
  fetchWeather()
}, 30000);

export default weatherStore;