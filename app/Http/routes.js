'use strict'

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

const Route = use('Route')

Route.get('/', 'PostsController.index')

Route.get('/posts/create', 'PostsController.create');

Route.post('/posts/store', 'PostsController.store');

Route.get('/about', 'PostsController.about')

Route.get('/contact', 'PostsController.contact')
