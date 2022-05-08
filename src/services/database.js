// this is a file that simulate a connection with a bd (we use a static json)
exports.getJsonData = () => {
  return {
    players: [
      {
        id: 52,
        firstname: "Novak",
        lastname: "Djokovic",
        shortname: "N.DJO",
        sex: "M",
        country: {
          picture:
            "https://data.latelier.co/training/tennis_stats/resources/Serbie.png",
          code: "SRB",
        },
        picture:
          "https://data.latelier.co/training/tennis_stats/resources/Djokovic.png",
        data: {
          rank: 2,
          points: 2542,
          weight: 80000,
          height: 188,
          age: 31,
          last: [1, 1, 1, 1, 1],
          carrerTitles: [
            {
              year: 2021,
              titles: [
                'ATP Masters 1000 Paris (Indoor/Hard)',
                'Wimbeldon (Outdoor/Grass)',
                'Roland Garros (Outdoor/Clay)',
                'Belgrade 2 (Outdoor/Clay)',
                'Australian Open (Outdoor/Hard)'
              ]
            },
            {
              year: 2020,
              titles: [
                'ATP Masters 1000 Rome (Indoor/Hard)',
                'ATP Masters 1000 Cincinnati (Outdoor/Hard)',
                'Dubai (Outdoor/Hard)',
                'Australian Open (Outdoor/Hard)'
              ]
            },
            {
              year: 2019,
              titles: [
                'ATP Masters 1000 Paris (Indoor/Hard)',
                'Tokio (Outdoor/Hard)',
                'Wimbeldon (Outdoor/Grass)'
              ]
            }
          ]
        },
      },
      {
        id: 95,
        firstname: "Venus",
        lastname: "Williams",
        shortname: "V.WIL",
        sex: "F",
        country: {
          picture:
            "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg", // change it (the original link is down)
          code: "USA",
        },
        picture:
          "https://data.latelier.co/training/tennis_stats/resources/Venus.webp",
        data: {
          rank: 52,
          points: 1105,
          weight: 74000,
          height: 185,
          age: 38,
          last: [0, 1, 0, 0, 1],
          carrerTitles: [
            {
              year: 2021,
              titles: [
                'ATP Masters 1000 Paris (Indoor/Hard)',
                'Wimbeldon (Outdoor/Grass)',
                'Roland Garros (Outdoor/Clay)',
                'Belgrade 2 (Outdoor/Clay)',
                'Australian Open (Outdoor/Hard)'
              ]
            },
            {
              year: 2020,
              titles: [
                'ATP Masters 1000 Rome (Indoor/Hard)',
                'ATP Masters 1000 Cincinnati (Outdoor/Hard)',
                'Dubai (Outdoor/Hard)',
                'Australian Open (Outdoor/Hard)'
              ]
            },
            {
              year: 2019,
              titles: [
                'ATP Masters 1000 Paris (Indoor/Hard)',
                'Tokio (Outdoor/Hard)',
                'Wimbeldon (Outdoor/Grass)'
              ]
            }
          ]
        },
      },
      {
        id: 65,
        firstname: "Stan",
        lastname: "Wawrinka",
        shortname: "S.WAW",
        sex: "M",
        country: {
          picture:
            "https://data.latelier.co/training/tennis_stats/resources/Suisse.png",
          code: "SUI",
        },
        picture:
          "https://data.latelier.co/training/tennis_stats/resources/Wawrinka.png",
        data: {
          rank: 21,
          points: 1784,
          weight: 81000,
          height: 183,
          age: 33,
          last: [1, 1, 1, 0, 1],
          carrerTitles: [
            {
              year: 2021,
              titles: [
                'ATP Masters 1000 Paris (Indoor/Hard)',
                'Wimbeldon (Outdoor/Grass)',
                'Roland Garros (Outdoor/Clay)',
                'Belgrade 2 (Outdoor/Clay)',
                'Australian Open (Outdoor/Hard)'
              ]
            },
            {
              year: 2020,
              titles: [
                'ATP Masters 1000 Rome (Indoor/Hard)',
                'ATP Masters 1000 Cincinnati (Outdoor/Hard)',
                'Dubai (Outdoor/Hard)',
                'Australian Open (Outdoor/Hard)'
              ]
            },
            {
              year: 2019,
              titles: [
                'ATP Masters 1000 Paris (Indoor/Hard)',
                'Tokio (Outdoor/Hard)',
                'Wimbeldon (Outdoor/Grass)'
              ]
            }
          ]
        },
      },
      {
        id: 102,
        firstname: "Serena",
        lastname: "Williams",
        shortname: "S.WIL",
        sex: "F",
        country: {
          picture:
            "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg", // change it (the original link is down)
          code: "USA",
        },
        picture:
          "https://data.latelier.co/training/tennis_stats/resources/Serena.png",
        data: {
          rank: 10,
          points: 3521,
          weight: 72000,
          height: 175,
          age: 37,
          last: [0, 1, 1, 1, 0],
          carrerTitles: [
            {
              year: 2021,
              titles: [
                'ATP Masters 1000 Paris (Indoor/Hard)',
                'Wimbeldon (Outdoor/Grass)',
                'Roland Garros (Outdoor/Clay)',
                'Belgrade 2 (Outdoor/Clay)',
                'Australian Open (Outdoor/Hard)'
              ]
            },
            {
              year: 2020,
              titles: [
                'ATP Masters 1000 Rome (Indoor/Hard)',
                'ATP Masters 1000 Cincinnati (Outdoor/Hard)',
                'Dubai (Outdoor/Hard)',
                'Australian Open (Outdoor/Hard)'
              ]
            },
            {
              year: 2019,
              titles: [
                'ATP Masters 1000 Paris (Indoor/Hard)',
                'Tokio (Outdoor/Hard)',
                'Wimbeldon (Outdoor/Grass)'
              ]
            }
          ]
        },
      },
      {
        id: 17,
        firstname: "Rafael",
        lastname: "Nadal",
        shortname: "R.NAD",
        sex: "M",
        country: {
          picture:
            "https://data.latelier.co/training/tennis_stats/resources/Espagne.png",
          code: "ESP",
        },
        picture:
          "https://data.latelier.co/training/tennis_stats/resources/Nadal.png",
        data: {
          rank: 1,
          points: 1982,
          weight: 85000,
          height: 185,
          age: 33,
          last: [1, 0, 0, 0, 1],
          carrerTitles: [
            {
              year: 2021,
              titles: [
                'ATP Masters 1000 Paris (Indoor/Hard)',
                'Wimbeldon (Outdoor/Grass)',
                'Roland Garros (Outdoor/Clay)',
                'Belgrade 2 (Outdoor/Clay)',
                'Australian Open (Outdoor/Hard)'
              ]
            },
            {
              year: 2020,
              titles: [
                'ATP Masters 1000 Rome (Indoor/Hard)',
                'ATP Masters 1000 Cincinnati (Outdoor/Hard)',
                'Dubai (Outdoor/Hard)',
                'Australian Open (Outdoor/Hard)'
              ]
            },
            {
              year: 2019,
              titles: [
                'ATP Masters 1000 Paris (Indoor/Hard)',
                'Tokio (Outdoor/Hard)',
                'Wimbeldon (Outdoor/Grass)'
              ]
            }
          ]
        },
      },
    ],
  };
};
