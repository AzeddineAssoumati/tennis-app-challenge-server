const { getJsonData } = require("../../../services/database");
const { EnumCountry } = require("../enums/players.enums");

class PlayersService {
  static fetchPlayers() {
    return getJsonData().players.map((player) => {
      return {
        id: player.id,
        firstname: player.firstname,
        lastname: player.lastname,
        country: EnumCountry[player.country.code],
        picture: player.picture,
        points: player.data.points,
        rank: player.data.rank,
      };
    });
  }
}

module.exports = PlayersService;
