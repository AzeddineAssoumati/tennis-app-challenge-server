const PlayersService = require("../services/players.service");

exports.fetchPlayers = (req, res, next) => {
  try {
    const players = PlayersService.fetchPlayers()
      .sort((a, b) => a.points < b.points ? 1 : -1); // sort players baesed on points from the best to worst

    res.json(players);
  } catch (err) {
    next(err);
  }
};
