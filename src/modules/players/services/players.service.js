const { getJsonData } = require("../../../services/database");
const { EnumCountry } = require("../enums/players.enums");
const mathjs = require("mathjs");

class PlayersService {
  static fetchPlayers() {
    const players = getJsonData().players.map((player) => {
      return {
        id: player.id,
        firstName: player.firstname,
        lastName: player.lastname,
        fullName: player.firstname + ' ' + player.lastname,
        picture: player.picture,
        points: player.data.points,
        rank: player.data.rank,
        country: {
          code: player.country.code,
          name: EnumCountry[player.country.code].name
        }
      };
    });

    const statistics = this.fetchStatistics();

    return {
      players,
      statistics
    }
  }

  static getPlayer(id) {
    const player = getJsonData().players.find((player) => player.id == id);

    if (!player) {
      return null;
    }

    return {
      id: player.id,
      firstName: player.firstname,
      lastName: player.lastname,
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
        name: EnumCountry[player.country.code].name,
      },
      careerTitles: player.data.carrerTitles
    };
  }

  static fetchStatistics() {
    const players = getJsonData().players;

    return {
      paysRatioSorted: this.sortPaysRatio(players),
      IMCMoyen: this.calculateIMCMoyen(players),
      tailleMediane: this.calculateHeightMedian(players)
    }
  }

  static calculateHeightMedian(players) {
    return mathjs.median(
      players.map((player) => player.data.height)
    );
  }

  static calculateIMCMoyen(players) {
    // the formula is ==> IMC = kg/m^2
    return mathjs.mean(
      players.map((player) => {
        const weightKg = player.data.weight / 1000; // transform the weight to kilos
        const heightM = player.data.height / 100; // transform the height to metres
        return weightKg / mathjs.pow(heightM, 2);
      })
    );
  }

  static sortPaysRatio(players) {
    const country_ratio = {
      SRB: {
        ratio: this.getCountryRatio(players, EnumCountry.SRB.code),
        name: EnumCountry.SRB.name
      },
      USA: {
        ratio: this.getCountryRatio(players, EnumCountry.USA.code),
        name: EnumCountry.USA.name
      },
      SUI: {
        ratio: this.getCountryRatio(players, EnumCountry.SUI.code),
        name: EnumCountry.SUI.name
      },
      ESP: {
        ratio: this.getCountryRatio(players, EnumCountry.ESP.code),
        name: EnumCountry.ESP.name
      }
    };

    return Object.values(country_ratio)
      .sort((country_a, country_b) => mathjs.compare(country_b.ratio, country_a.ratio))
      .map(item => {
        item.ratio = mathjs.floor(item.ratio * 100);
        return item;
      });
  }

  static getCountryRatio(players, code) {
    const totalPoints = mathjs.sum(players.map((player) => player.data.points));
    return mathjs.sum(players.filter((p) => p.country.code === code).map((p) => p.data.points)) / totalPoints
  }
}

module.exports = PlayersService;
