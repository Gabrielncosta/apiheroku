'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table
        .integer('categories_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
      table.string('name').notNullable()
      table.integer('stock_balance')
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
