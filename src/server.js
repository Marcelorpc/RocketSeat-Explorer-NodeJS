const express = require("express");

const app = express();

app.get("/message/:id/:name", (request, response) => {
  response.send(`
    Message ID: ${request.params.id}.
    User: ${request.params.name}.
  `)
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));