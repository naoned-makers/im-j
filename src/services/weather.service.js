import axios from 'axios';
import moment from 'moment';

const getWeather = async () => {
  try {
    if (!localStorage.getItem('weather.age') || moment().diff(moment(Number.parseInt(localStorage.getItem('weather.age'), 10)), 'minutes') > 10) {
      // const weather = await axios.get('http://api.wunderground.com/api/50a65432f17cf542/conditions/q/France/Nantes.json');
      const weather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=6434483&appid=${process.env.OWM_APPID}&units=metric&lang=fr`);
      console.log(`Weather API call at ${moment().format()}`);
      localStorage.setItem('weather.age', moment().format('x'));
      localStorage.setItem('weather.data', JSON.stringify(weather.data));
    }
    return {
      temperature: JSON.parse(localStorage.getItem('weather.data')).main.temp,
      conditionId: JSON.parse(localStorage.getItem('weather.data')).weather[0].icon,
      pressure: JSON.parse(localStorage.getItem('weather.data')).main.pressure,
      humidity: JSON.parse(localStorage.getItem('weather.data')).main.humidity
    }
  } catch (error) {
    throw error;
  }
}

export { getWeather };