'use strict'

const Schema = use('Schema')

class RibbitsTableSchema extends Schema {

  up () {
    this.create('ribbits', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('ribbits')
  }

}

module.exports = RibbitsTableSchema
