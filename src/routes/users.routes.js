const { Router } = require("express");

const UsersController = require("../controllers/usersController");

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/create", usersController.create)
usersRoutes.put("/update/:id", usersController.update)
module.exports = usersRoutes;