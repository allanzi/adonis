'use strict'

const Post = use('App/Model/Post');

class PostsController {
	
	* index (request, response)
	{
		const posts = yield Post.all();
		yield response.sendView('home', {posts: posts.toJSON()})
	}

	* create (request, response)
	{
		yield response.sendView('posts.create');
	}

	* store (request, response)
  {

  }

	* about (request, response)
	{
		yield response.sendView('about')
	}

	* contact (request, response)
	{
		yield response.sendView('contact')
	}

}

module.exports = PostsController
