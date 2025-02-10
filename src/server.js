require("express-async-errors"); //Importa a dependencia de tratanento de erros

const AppError = require("./utils/AppError"); //Importa meu modulo de tratar erros

const express = require("express"); //importa o express

const database = require("./database/sqlite"); //importa meu database

const app = express(); //inicializa o express

const routes = require("./routes"); //pega o routes do index.js

database(); //inicio meu banco de dados

app.use(express.json()) //Informa ao express que irei receber json no body params

app.use(routes); //informa ao express que vou usar o routes que criei

//Tratamento de erros da minha aplicação
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.error(error)

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

const PORT = 3333; //coloca a porta desejada como const para facilitar alteracoes futuras
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)) //Indica para escutar a porta definida e executar uma mensagem
