import { observable, action, runInAction } from 'mobx';
import { getWeather } from '../services/weather.service';

const fetchWeather = async () => {
  try {
    const weather = await getWeather();
    runInAction(() => {
      weatherStore.temperature = weather.temperature;
      weatherStore.conditionId = weather.conditionId;
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
});

setInterval(() => {
  fetchWeather()
}, 30000);

export default weatherStore;