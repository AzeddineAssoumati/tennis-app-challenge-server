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

  static getPlayer(id) {
    const player = getJsonData().players.find((player) => player.id == id);

    if (!player) {
      return null;
    }

    return {
      id: player.id,
      firstname: player.firstname,
      lastname: player.lastname,
      picture: player.picture,
      points: player.data.points,
      rank: player.data.rank,
      age: player.data.age,
      weight: player.data.weight,
      height: player.data.height,
      birthYear: new Date().getFullYear() - player.data.age,
      country: {
        code: player.country.code,
        picture: player.country.picture,
        name: EnumCountry[player.country.code],
      },
    };
  }
}

module.exports = PlayersService;
