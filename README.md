# TennisAppChallenge

This project was created with node.js version LTS (16.15.0) to download node please go to `https://nodejs.org/en/`.

## Development server

Install dependencies with `npm install`
Run `npm run start` for a dev server. Navigate to `http://localhost:3000/` to try the API.

## API design

The API has: 
- The opening point which return `Welcome to node server`
- The `/players` modules:
  - `/list` return the list of players (and also global statistics "was needed for the front app")
  - `/:id` return a specific player by his id
  - `/statistics` return global statistics (IMC moyen, players taille median, ratio of winning for countries)

## Deployement

The project is running on a heroku server
