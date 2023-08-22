/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('frutas', (table) => {
    table.increments('id');
    table.string('Name').notNullable().unique();
    table.string('Descripcion');
    table.integer('Cantidad').unsigned().notNullable();
    table.decimal('Precio',10,2)
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('frutas')
};
