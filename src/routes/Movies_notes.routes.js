const { Router } = require("express");
const Moviesrouter = Router();

Moviesrouter.get("/:id", (request, response) => {
  const { id } = request.params;
  response.send(`Testando!!!`);

  
});

module.exports = Moviesrouter;