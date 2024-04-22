const express = require("express");

const app = express();

app.post("/users", (request, response) => {
  const {page, limit} = request.query

  response.send("Voce chamou o post")
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));