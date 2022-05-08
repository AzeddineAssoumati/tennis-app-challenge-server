const PlayersService = require("../services/players.service");

exports.fetchPlayers = (req, res, next) => {
  try {
    const data = PlayersService.fetchPlayers();
    data.players = data.players.sort((a, b) => a.points < b.points ? 1 : -1); // sort players baesed on points from the best to worst

    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getPlayer = (req, res, next) => {
  try {
    const id = req.params.id;
    const player = PlayersService.getPlayer(id);

    res.status(200).json(player);
  } catch (err) {
    next(err);
  }
};

exports.fetchStatistics = (req, res, next) => {
  try {
    const statistics = PlayersService.fetchStatistics();
    res.status(200).json(statistics);
  } catch (err) {
    next(err);
  }
};
