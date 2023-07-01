class UserControllers {
    create(request, response){
        const {id} = request.params;

        response.send(`Teste!!`);

    };
};

module.exports = UserControllers;