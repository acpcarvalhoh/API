const AppError = require("./../utils/App.Error")


class UserControllers {

    /* 
        * index - GET listar vários registros.
        * show - GET para exibir um registro específico.
        * create - POST para criar registro
        * update - PUT para atualizar um registro]
        * delete - DELETE para remover um registro
    */


    async create(request, response){
        const {name, email, password} = request.body;
        const { id } = request.params;

        if(!name){
            throw new AppError("Nome é obrigatório")
        }

        response.json(`Teste!!`);

    };
};

module.exports = UserControllers;