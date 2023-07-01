const express = require('express')
const app = express()

const PORT = 3333;


const routes = require("./routes")

app.use(routes);


app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
