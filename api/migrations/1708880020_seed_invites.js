/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);

  const col = dao.findCollectionByNameOrId('invites')

  const data = [
    {
      "name": "NJ",
      "partner": "",
      "hasPlusOne": false,
      "code": "eA7iR1KbWv"
    },
    {
      "name": "KenKen",
      "partner": "",
      "hasPlusOne": false,
      "code": "7oLc5Jd8X3"
    },
    {
      "name": "Sir PJ",
      "partner": "",
      "hasPlusOne": false,
      "code": "b3WtQ1Ku2j"
    },
    {
      "name": "Maam Karen",
      "partner": "",
      "hasPlusOne": false,
      "code": "dXzHm1Gq8l"
    },
    {
      "name": "Atty Ramsey",
      "partner": "",
      "hasPlusOne": false,
      "code": "aY9mO6Tb5q"
    },
    {
      "name": "Atty Rene",
      "partner": "",
      "hasPlusOne": false,
      "code": "nV2dZ8Uq5s"
    },
    {
      "name": "Sam",
      "partner": "",
      "hasPlusOne": false,
      "code": "jU5zH4Gv1b"
    },
    {
      "name": "Bert",
      "partner": "",
      "hasPlusOne": false,
      "code": "iD6wJ8Vm4l"
    },
    {
      "name": "Euvic",
      "partner": "",
      "hasPlusOne": false,
      "code": "qA3yL7Wi1c"
    },
    {
      "name": "Dwight",
      "partner": "",
      "hasPlusOne": false,
      "code": "zC5rY2Vp1t"
    },
    {
      "name": "Pjay",
      "partner": "",
      "hasPlusOne": false,
      "code": "nQ1tZ6Ls4a"
    },
    {
      "name": "Joreen",
      "partner": "",
      "hasPlusOne": false,
      "code": "tX8vD1Jk5r"
    },
    {
      "name": "Eula",
      "partner": "",
      "hasPlusOne": false,
      "code": "rW9sZ4Np8m"
    },
    {
      "name": "Gus",
      "partner": "",
      "hasPlusOne": false,
      "code": "mO4tR7Wk9i"
    },
    {
      "name": "Cheska",
      "partner": "",
      "hasPlusOne": false,
      "code": "dS1kX8Vm5q"
    },
    {
      "name": "Daisy",
      "partner": "",
      "hasPlusOne": false,
      "code": "eG1qZ5Ps7c"
    },
    {
      "name": "Tessa",
      "partner": "",
      "hasPlusOne": false,
      "code": "kW3jM6Qz9r"
    },
    {
      "name": "Tinne",
      "partner": "",
      "hasPlusOne": false,
      "code": "qB2pX5Vz3j"
    },
    {
      "name": "Camille",
      "partner": "",
      "hasPlusOne": false,
      "code": "hV9zG5Hm6p"
    },
    {
      "name": "Metz",
      "partner": "",
      "hasPlusOne": false,
      "code": "yT1mN6Rv3a"
    },
    {
      "name": "Quen",
      "partner": "",
      "hasPlusOne": false,
      "code": "pL4kQ8Vr7s"
    },
    {
      "name": "Aunt Vivien",
      "partner": "",
      "hasPlusOne": false,
      "code": "kW5rY3Ds6p"
    },
    {
      "name": "Kurt",
      "partner": "",
      "hasPlusOne": false,
      "code": "gH8bV5Kr1l"
    },
    {
      "name": "Queeny",
      "partner": "",
      "hasPlusOne": false,
      "code": "nO9lT4Xd8j"
    },
    {
      "name": "Cheche",
      "partner": "",
      "hasPlusOne": false,
      "code": "mS2wN7Kp4z"
    },
    {
      "name": "Dave",
      "partner": "",
      "hasPlusOne": false,
      "code": "iQ3aX6Mv9b"
    },
    {
      "name": "Bree",
      "partner": "",
      "hasPlusOne": false,
      "code": "hV7kP4Bs1r"
    },
    {
      "name": "Achas",
      "partner": "",
      "hasPlusOne": false,
      "code": "oT9pW5Rm6a"
    },
    {
      "name": "Lalaine",
      "partner": "",
      "hasPlusOne": false,
      "code": "fH1qS7Kt2j"
    },
    {
      "name": "Keith",
      "partner": "",
      "hasPlusOne": false,
      "code": "kX2vG9Bw3l"
    },
    {
      "name": "Charly",
      "partner": "",
      "hasPlusOne": false,
      "code": "aR4sZ7Vx9m"
    },
    {
      "name": "Mama",
      "partner": "",
      "hasPlusOne": false,
      "code": "cW7pH6Bj1q"
    },
    {
      "name": "Papa",
      "partner": "",
      "hasPlusOne": false,
      "code": "fS6dR3Lv5o"
    },
    {
      "name": "Ahia",
      "partner": "",
      "hasPlusOne": false,
      "code": "bK9qG2Nw4m"
    },
    {
      "name": "Paul",
      "partner": "",
      "hasPlusOne": false,
      "code": "eX6gZ9Wp3l"
    },
    {
      "name": "Albert",
      "partner": "",
      "hasPlusOne": false,
      "code": "rH3tB6Jk8z"
    },
    {
      "name": "LuDan",
      "partner": "",
      "hasPlusOne": false,
      "code": "jV4xW7Pm8l"
    },
    {
      "name": "Sergi",
      "partner": "",
      "hasPlusOne": false,
      "code": "eQ1wN8Ml4s"
    },
    {
      "name": "Uncle Aiken",
      "partner": "",
      "hasPlusOne": false,
      "code": "oD8mR4Hn1w"
    },
    {
      "name": "Aunt Gina",
      "partner": "",
      "hasPlusOne": false,
      "code": "lG4bH6Jv7s"
    },
    {
      "name": "Aunt Dina",
      "partner": "",
      "hasPlusOne": false,
      "code": "xW7pZ9Tr2m"
    },
    {
      "name": "Nikki",
      "partner": "",
      "hasPlusOne": false,
      "code": "eH3kW6Vs8p"
    },
    {
      "name": "Lee Anne",
      "partner": "",
      "hasPlusOne": false,
      "code": "pL8vX9Sq4m"
    },
    {
      "name": "Kaila",
      "partner": "",
      "hasPlusOne": false,
      "code": "gD4qV2Zt9j"
    },
    {
      "name": "PJ",
      "partner": "",
      "hasPlusOne": false,
      "code": "hW5sQ8Zj1m"
    },
    {
      "name": "Hareld",
      "partner": "",
      "hasPlusOne": false,
      "code": "zP8kG3Jl9t"
    },
    {
      "name": "Uncle Lauro",
      "partner": "",
      "hasPlusOne": false,
      "code": "sX4jR6Fv9t"
    },
    {
      "name": "Shiny",
      "partner": "Ervin",
      "hasPlusOne": true,
      "code": "nM7gR1Bk5w"
    },
    {
      "name": "Mia",
      "partner": "Marke",
      "hasPlusOne": true,
      "code": "bW9cV1Nk8q"
    },
    {
      "name": "Mayang",
      "partner": "Yass",
      "hasPlusOne": true,
      "code": "pD2mX8Bj5h"
    },
    {
      "name": "Fiona",
      "partner": "Tanho",
      "hasPlusOne": true,
      "code": "fH7gZ3Rm8s"
    },
    {
      "name": "Anther",
      "partner": "Kath",
      "hasPlusOne": true,
      "code": "vF5gT2Pq9w"
    },
    {
      "name": "Kim",
      "partner": "Michael",
      "hasPlusOne": true,
      "code": "mL8cX5Vz9r"
    },
    {
      "name": "Rachelle",
      "partner": "Vincent",
      "hasPlusOne": true,
      "code": "zA3wG6Kj1x"
    },
    {
      "name": "Gayle",
      "partner": "Tatie",
      "hasPlusOne": true,
      "code": "jU5tD8Nk1p"
    },
    {
      "name": "Red",
      "partner": "Carissa",
      "hasPlusOne": true,
      "code": "vB3xK5Dj1n"
    },
    {
      "name": "Ken",
      "partner": "Partner",
      "hasPlusOne": true,
      "code": "cP2sW4Zl9j"
    },
    {
      "name": "Gabriella",
      "partner": "Will",
      "hasPlusOne": true,
      "code": "hT4vB7Kq1r"
    },
    {
      "name": "Trixie",
      "partner": "Ian",
      "hasPlusOne": true,
      "code": "mV6wJ9Lp1h"
    },
    {
      "name": "Aunt Bebet",
      "partner": "Issa",
      "hasPlusOne": true,
      "code": "nS5kV8Dm3o"
    },
    {
      "name": "Kuya Gboy",
      "partner": "Ate Crystal",
      "hasPlusOne": true,
      "code": "bL4wR8Kv5a"
    },
    {
      "name": "Ate Janelle",
      "partner": "JP, Andrea",
      "hasPlusOne": true,
      "code": "lG3vB6Jt4n"
    },
    {
      "name": "Ate Ebeb",
      "partner": "Husband",
      "hasPlusOne": true,
      "code": "hX9dP3Kr6v"
    },
    {
      "name": "Ate Chinchin",
      "partner": "Husband",
      "hasPlusOne": true,
      "code": "aG7dW9Pl2r"
    },
    {
      "name": "Kuya Ken",
      "partner": "Ate Pau",
      "hasPlusOne": true,
      "code": "vR1bX6Kn8s"
    },
    {
      "name": "Nikki",
      "partner": "Kevin",
      "hasPlusOne": true,
      "code": "pV5mD9Bo6c"
    },
    {
      "name": "Gats",
      "partner": "Daphne",
      "hasPlusOne": true,
      "code": "gB3cW1Vp8k"
    },
    {
      "name": "Sioty",
      "partner": "Shaira",
      "hasPlusOne": true,
      "code": "zK6hN1Mv7b"
    },
    {
      "name": "Erl",
      "partner": "George",
      "hasPlusOne": true,
      "code": "eX5qH9Vc3j"
    },
    {
      "name": "Louis",
      "partner": "Nessa",
      "hasPlusOne": true,
      "code": "cF8zX4Rm1v"
    },
    {
      "name": "LA",
      "partner": "Tracy",
      "hasPlusOne": true,
      "code": "gA6vN9Ts3h"
    },
    {
      "name": "Daits",
      "partner": "Mikee",
      "hasPlusOne": true,
      "code": "jG9pL4Tq6k"
    },
    {
      "name": "Insoy",
      "partner": "Anne",
      "hasPlusOne": true,
      "code": "lD7mK2Pb3t"
    },
    {
      "name": "Owie",
      "partner": "Gill",
      "hasPlusOne": true,
      "code": "qJ4wR6Vo9x"
    },
    {
      "name": "Ramon",
      "partner": "Mai",
      "hasPlusOne": true,
      "code": "vA1pB6Wd8r"
    },
    {
      "name": "Nico",
      "partner": "Cess",
      "hasPlusOne": true,
      "code": "xQ3bH5Pm6w"
    },
    {
      "name": "Reu",
      "partner": "Patet",
      "hasPlusOne": true,
      "code": "iU5vD4Jo1t"
    },
    {
      "name": "Jason",
      "partner": "KC",
      "hasPlusOne": true,
      "code": "yF6tG1Sk3h"
    },
    {
      "name": "Kevin",
      "partner": "Partner",
      "hasPlusOne": true,
      "code": "fV9jM4Tl8z"
    },
    {
      "name": "Peter",
      "partner": "Hopefully",
      "hasPlusOne": true,
      "code": "dK7bP9Vc4s"
    },
    {
      "name": "Ces",
      "partner": "Jen",
      "hasPlusOne": true,
      "code": "lT3qW7Xm9n"
    }
  ]

  data.forEach((payload) => {
    const record = new Record(col, payload)

    dao.saveRecord(record)
  })
}, (db) => {
  const dao = new Dao(db);

  const records = dao.findRecordsByFilter('invites')

  records.forEach(record => {
    dao.deleteRecord(record)
  })
})