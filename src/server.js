require("express-async-errors")
const express = require('express')
const app = express()
const AppError = require("./utils/App.Error")

const PORT = 3333;


const routes = require("./routes");

app.use(express.json());

app.use(routes);
app.use((error, request, response, next) => {
    if(error instanceof AppError){
        response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    };

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })

});



app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
