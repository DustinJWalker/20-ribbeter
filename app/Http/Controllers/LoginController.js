'use strict';

class LoginController {
// show login from to our user
  *index(request, response) {

  }

  * create(request, response) {
    yield response.sendView('login.create');
  }
// respond to user trying to login
  * store(request, response) {
    const { email, password } = request.all();

    try {
      const validLogin = yield request.auth.attempt(email, password);

      // send a success message on the next request
      yield request.with({ success: 'You have logged in!' }).flash();

      // rediect to the home page
      response.redirect('/users');
    } catch (e) {
      // send back the old inputs (but not the password)
      yield request.withOut('password')
          .andWith({ error: 'Credentials do not match.' })
          // only show the messages once
          .flash();
        // back from where you came
      response.redirect('back');
    }
  }

  * destroy(request, response) {
    // logout the user
    yield request.auth.logout();

    // send an alert message
    yield request.with({ success: 'You have logged out!' }).flash();

    // redirect to the login form
    response.redirect('/login');
  }

}

module.exports = LoginController;
