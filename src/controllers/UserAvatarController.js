const knex = require("../database/knex");
const AppError = require("../utils/App.Error");
const Diskstorage = require("../providers/Diskstorage");

class UserAvatarController{
    async update(request, response){
        const user_id = request.user.id;
        const avatarFile = request.file.filename;

        const diskstorage = new Diskstorage();

        const user = await knex("users").where({ id: user_id }).first();

        if(!user){
            throw new AppError("Usuário não autenticado para trocar avatar", 401);
        };

        if(user.avatar){
            await diskstorage.delete(user.avatar);
        };

        const fileName = await diskstorage.save(avatarFile);

        user.avatar = fileName;

        await knex("users").update(user).where({ id: user_id });

        response.json(user);


    };


};


module.exports = UserAvatarController;