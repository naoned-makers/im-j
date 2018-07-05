[![Build Status](https://travis-ci.org/naoned-makers/jarvis-ui.svg?branch=develop)](https://travis-ci.org/naoned-makers/jarvis-ui)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/22be6af75bf94d0c93ef5e306889e959)](https://www.codacy.com/app/franck.wlodarezack/jarvis-ui?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=naoned-makers/jarvis-ui&amp;utm_campaign=Badge_Grade)
[![codebeat badge](https://codebeat.co/badges/87bb6cef-7d24-4d8c-9877-560a4224f594)](https://codebeat.co/projects/github-com-naoned-makers-jarvis-ui-develop)

# Environment variables

A `.env` file must exist in the root directory of the project to define the following environment-specific variables :
- `OWM_APPID` : API key for OpenWeatherMap service
- `OWM_CITYID` : City ID to display weather
- `MQTT_HOST` : mqtt connexion hostname or IP
- `MQTT_PORT` : mqtt connexion port
- `KINECT_MJPEG_STREAMER` : url of the mjpeg stream
- `TWITTER_KEYWORDS` : used to highlight tweets containing the defined comma-separated list of keywords (optional)

# Development

Launch application in development mode, including automatic refresh :

```sh
yarn start
```
Access `http://localhost:3030/`.

# Production

Launch build task for production with the following command :

```sh
yarn build
```
Generated bundles are stored in the `/dist` directory.
