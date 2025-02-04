const { Router } = require("express"); //Importa apenas o Router do express

const routes = Router();

const usersRouter = require("./users.routes") //Grupo de rotas de usuario
routes.use("/users", usersRouter)

module.exports = routes;