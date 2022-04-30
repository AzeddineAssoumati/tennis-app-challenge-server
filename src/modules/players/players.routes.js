const express = require("express");
const router = express.Router();
const PlayersControllers = require("./controllers/players.controller");

router.get("/list", PlayersControllers.fetchPlayers);

module.exports = router;
