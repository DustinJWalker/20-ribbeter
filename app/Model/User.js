'use strict';

const Lucid = use('Lucid');

class User extends Lucid {

  apiTokens() {
    return this.hasMany('App/Model/Token');
  }

  ribbits() {
    return this.hasMany('App/Model/Ribbit');
  }

}

module.exports = User;
