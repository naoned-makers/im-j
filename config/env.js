import path from 'path';
import dotenv from 'dotenv';

export default (nodeEnv = 'development') => {
  const allVars = {
    NODE_ENV: process.env.NODE_ENV || nodeEnv,
    ...dotenv.config({
      path: path.join(__dirname, '../.env'),
      silent: true,
    }).parsed,
  };

  return Object.keys(allVars)
    .reduce((memo, key) => ({
      ...memo,
      [`process.env.${key.toUpperCase()}`]: JSON.stringify(allVars[key]),
    }), {});
};
