import { capitalize } from '../utils/string.utils';

const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';

const stringGen = (len, charset) => {
  let text = '';
  for (let i = 0; i < len; i++) {
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return text;
};

const name = () => {
  return `${capitalize(nameGen(Math.floor(Math.random() * 4) + 4, letters))} ${capitalize(nameGen(Math.floor(Math.random() * 5) + 5, letters))}`;
};

const screenName = () => {
  return `@${stringGen(Math.floor(Math.random() * 7) + 7, letters + numbers)}`;
};

const generateTweet = () => ({
  name: name(),
  screenName: screenName(),
  text: stringGen(140, letters + numbers + '      '),
  timeSinceCreation: Math.floor(Math.random() * 60)
});

const stream = (handleData) => {
  setInterval(() => handleData(generateTweet()), 12000);
};

export { stream };