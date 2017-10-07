# Environment variables

A `.env` file must exist in the root directory of the project to define the following environment-specific variables :
- `OWM_APPID` : API key for OpenWeatherMap service.

# Development

Launch application in development mode, including automatic refresh :

```sh
npm start
```

3. Access `http://localhost:3000/`.

# Production

Launch build task for production with the following command :

```sh
npm run build
```

Cette instruction lance en parallèle la construction du serveur et du client, et met à disposition les bundles générés dans le répertoire `/dist`.
Generated bundles are stored in the `/dist` directory.