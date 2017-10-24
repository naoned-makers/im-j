# Environment variables

A `.env` file must exist in the root directory of the project to define the following environment-specific variables :
- `OWM_APPID` : API key for OpenWeatherMap service
- `OWM_CITYID` : City ID to display weather
- `MQTT_HOST` : mqtt connexion hostname or IP
- `MQTT_PORT` : mqtt connexion port
- `KINECT_MJPEG_STREAMER` : url of the mjpeg stream
- `TWITTER_KEYWORD` : used to highlight tweets containing the defined keyword (optional)

# Development

Launch application in development mode, including automatic refresh :

```sh
npm start
```
Access `http://localhost:3030/`.

# Production

Launch build task for production with the following command :

```sh
npm run build
```
Generated bundles are stored in the `/dist` directory.
