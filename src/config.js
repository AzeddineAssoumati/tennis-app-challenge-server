exports.getConfig = () => {
  return {
    cors: {
      origin: [
        'http://localhost:4200',
        'https://red-pebble-03eef3d03.1.azurestaticapps.net'
      ],
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
  }
}