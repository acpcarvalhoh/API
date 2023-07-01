const sqlconection = require("../../sqlite");
const createUsers = require("./createUser");


async function migrationsRun(){
    const schemas = [
        createUsers,

    ].join("");

    sqlconection()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error));
};

module.exports = migrationsRun;


