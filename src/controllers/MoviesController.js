const knex = require("../database/knex")


class MovieNotesController {
    /* 
        * index - GET listar vários registros.
        * show - GET para exibir um registro específico.
        * create - POST para criar registro
        * update - PUT para atualizar um registro]
        * delete - DELETE para remover um registro
    */

    async create(request, response){
        const {title, description, rating, tags} = request.body;
        const {user_id} = request.params;

        const [note_id] = await knex("movie_notes").insert({
            title,
            description,
            rating
        })

        console.log(note_id)

        const tagsInsert = tags.map(name=> {
            return{
                note_id,
                user_id,
                name
            }
        });

        await knex("movie_tags").insert(tagsInsert);


        response.json({message: "Nota cadastrada!!"})
    }



}

module.exports = MovieNotesController;