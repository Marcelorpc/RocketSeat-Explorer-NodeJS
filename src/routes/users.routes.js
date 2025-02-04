const { Router } = require("express");

const UsersController = require("../controllers/usersController");

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/name", usersController.create)

module.exports = usersRoutes;