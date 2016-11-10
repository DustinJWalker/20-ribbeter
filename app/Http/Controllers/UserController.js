'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {

// show a form to make a new account
  * create(request, response) {
    yield response.sendView('user.create');
  }
// save the account to the database
  * store(request, response) {
    // grabbing inputs
    const { username, email, password } = request.all();

    try {
      // save the user
      const user = yield User.create({
        username,
        email,
        password: yield Hash.make(password),
      });
        // login the current user
      yield request.auth.login(user);
        // give them a success message
      yield request.with({
        success: 'Congrats on creating a new account!',
      }).flash();
        // redirect them to the main site
      response.redirect('/users');
    } catch (e) {
      yield request
      .withOut('password')
      .andWith({ error: 'That username or email is already taken' }) // adds a message back
      .flash();// makes this data only last for one request
      response.redirect('back');
    }


    response.send(request.all());
  }


}

module.exports = UserController;
