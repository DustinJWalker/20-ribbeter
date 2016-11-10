'use strict'

class LoginController {
// show login from to our user

  * create(request, response) {
    yield response.sendView('login.create')
  }
// respond to user trying to login
  * store(request, response) {

    const { email, password } = request.all();

    try {
      // look up user based on their email
      // check that users password matches the input password
      // return true if everuthing is ok
      // return false if anything fails
      const validLogin = yield request.auth.attempt(email.password);

      // send a success message on the next request
        yield.request.with({ success: 'You have logged in!' }).flash();

      // rediect to the home page
      response.redirect('/');

    } catch (e) {
      // send back the old inputs (but not the password)
        yield request.withOut('password')
          .andWith({ error: 'Credentials do not match.' })
          // only show the messages once
          .flash();
        // back from where you came
        respond.redirect('back');
    } finally {

    }


  }

  * destroy(request, response) {
    //logout the user
    yield request.auth.logout();

    // send an alert message
    yield request.with({ success: 'You have logged out!'});

    // redirect to the login form
    response.redirect('/login');

  }

}

module.exports = LoginController