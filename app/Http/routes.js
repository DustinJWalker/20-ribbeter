'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.on('/').render('welcome');

Route.get('/register', 'UserController.create');
Route.post('/register', 'UserController.store');

// show login form
Route.get('/login', 'LoginController.create');
// responds to submitted login form
Route.post('/login', 'LoginContoller.store');

Route.get('/users', 'LoginController.create');
Route.post('/users', 'LoginController.store');
