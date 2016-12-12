'use strict';

const Schema = use('Schema');

class RibbitsTableSchema extends Schema {

  up() {
    this.create('ribbits', (table) => {
      table.increments();
      table.integer('user_id').references('users.id');
      table.string('body');
      table.timestamps();
    });
  }

  down() {
    this.drop('ribbits');
  }

}

module.exports = RibbitsTableSchema;
