if (process.env.NODE_ENV !== "production") {
    require("dotenv").config(); // ! Agar tidak jalan di aws
}

// require("dotenv").config();

const express = require("express");
const app = express();
// const port = 3000;

// const router = require("./routes");
const UserController = require("./controllers/UserController");
const GameController = require("./controllers/GamesController");
const authentication = require("./middlewares/authentication");
const MyListController = require("./controllers/MyListController");
const { errorHandler } = require("./middlewares/errorHandler");
const guardUser = require("./middlewares/guardUser");
const crossOrigin = require("./middlewares/cors");

// app.use(cors());
app.use(crossOrigin);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(router);


// User Endpoints
app.post("/register", UserController.register);
app.post("/login", UserController.login);

// Games Endpoints
app.get("/games", GameController.getGames);

// MyList Endpoints
app.use(authentication);

app.get("/myList", MyListController.getMyList);
app.post("/myList", MyListController.addMyList);
// app.get("myList", MyListController.findMyListById);
app.put("/myList/:id", guardUser, MyListController.updateMyList);
app.delete("/myList/:id", guardUser, MyListController.deleteMyList);

// Error Handler
app.use(errorHandler);

module.exports = app;
