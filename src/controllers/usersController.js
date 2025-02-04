const AppError = require("../utils/AppError")

class UsersController {
  
  create(request, response) {
    const { name } = request.body;

    if (!name) {
      throw new AppError("O nome é obrigatório!")
    }

    response.status(201).json({ name }); //Utiliza o status code de created
  }
}

module.exports = UsersController;