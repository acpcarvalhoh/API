const AppError = require("./../utils/App.Error")
const sqlconection = require("./../database/sqlite")
const {hash, compare} = require("bcryptjs")
const moment = require("moment")


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

        const database = await sqlconection();
        const checkUserExist = await database.get("SELECT  * FROM users WHERE email = (?)", [email]);

        

        if(checkUserExist){
            throw new AppError("Email já existe no banco de dados!")
        };

        const insertQuery = `
            INSERT INTO users (name, email, password)
            VALUES (?, ?, ?)

        `

        const hashedPassword = await hash(password, 8);
        const userValues = [name, email, hashedPassword];

        await database.run(insertQuery, userValues);

        response.status(200).json(
            {message: "Usuário cadastrado"}
        );

    };


    async update(request, response){
        const {name, email, password, old_password} = request.body;
        const { id } = request.params;

        const database = await sqlconection();

        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])
        if(!user){
            throw new AppError("Usuário inválido!!")
        }

        const checkEmailExist = await database.get("SELECT * FROM users WHERE email = (?)", [email])
        if(checkEmailExist && checkEmailExist.email !== user.email){
            throw new AppError("Este Email já está em uso!!")
        }

        user.name = name ?? user.name
        user.email = email ?? user.email

        if(password && !old_password){
            throw new AppError("Informe a senha antiga para continuar!!!")
        }

        if(password && old_password){
            const checkOldPassword = await compare(old_password, user.password)

            if(!checkOldPassword){
                throw new AppError("A senha antiga não confere!!")
            }

            user.password = await hash(password, 8)
        }

       

        const update_at = moment().format('YYYY-MM-DD HH:mm:ss')

        const insertUpdate = `
        
            UPDATE users SET
            name = ?,
            email = ?,
            password = ?, 
            updated_at = ? 
            WHERE id = ?

        `
        const updateValues = [user.name, user.email, user.password, update_at, id]

        await database.run(insertUpdate, updateValues)



        response.status(200).json({
            message: "Dados atualizados!!!"
        })

    }
};

module.exports = UserControllers;