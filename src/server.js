require("dotenv")
require("express-async-errors")
const AppError = require("./utils/App.Error")
const migrationsRun = require("./database/sqlite/migrations")
const uploadConfig = require("./configs/uploads")
const cors = require("cors")

const express = require('express')
const routes = require("./routes");
migrationsRun();


const app = express()
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))
app.use(cors());

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


const PORT = 3000;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
