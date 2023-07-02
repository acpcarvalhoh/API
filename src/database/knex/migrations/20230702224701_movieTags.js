exports.up = function(knex) {
    return knex.schema.createTable("movie_tags", function(table){
      table.increments("id");
      table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");
      table.integer("user_id").references("id").inTable("users");
      table.text("name");
      
    })
  };
  
  
  exports.down = function(knex) {
    return knex.schema.dropTable("movie_tags");
  };