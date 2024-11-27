const express = require("express");
const router = express.Router();

// const gameRouter = require("./games");
const UserController = require("../controllers/UserController");

router.post("/register", UserController.register);
router.post("/login", UserController.login);

module.exports = router;
