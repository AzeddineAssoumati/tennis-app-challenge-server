const express = require("express");
const router = express.Router();
const PlayersControllers = require("./controllers/players.controller");

router.get("/list", PlayersControllers.fetchPlayers);
router.get("/statistics", PlayersControllers.fetchStatistics);
router.get("/:id", PlayersControllers.getPlayer);


module.exports = router;
