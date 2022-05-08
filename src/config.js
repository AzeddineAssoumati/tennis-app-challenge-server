exports.getConfig = () => {
  return {
    cors: {
      origin: ['http://localhost:4200', 'http://tennis-app-challenge-latelier.s3-website.eu-west-3.amazonaws.com'],
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
  }
}