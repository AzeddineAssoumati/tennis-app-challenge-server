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

exports.getPlayer = (req, res, next) => {
  try {
    const id = req.params.id;
    const player = PlayersService.getPlayer(id);

    res.json(player);
  } catch (err) {
    next(err);
  }
};
