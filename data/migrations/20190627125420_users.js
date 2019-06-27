
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', users => {
        users.increments() // pk, not null, auto increment
 
        users // new column
         .string('username', 128)
         .notNullable()
    })
 };
 
 exports.down = function(knex, Promise) {
      return knex.schema
         .dropTableIfExists('users');
 };
 