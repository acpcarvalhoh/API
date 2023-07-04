exports.up = function(knex) {
  return knex.schema.createTable("movie_notes", function(table){
    table.increments("id");
    table.text("title");
    table.text("description");
    table.integer("rating");
    table.integer("user_id").references("id").inTable("users");
    table.timestamps(true, true);
  })
};


exports.down = function(knex) {
  return knex.schema.dropTable("movie_notes");
};
