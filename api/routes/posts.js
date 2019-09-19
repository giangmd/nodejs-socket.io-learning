'use strict';

module.exports = function(api) {
    const postController = require('../controllers/posts');

    api.route('/posts')
        .get(postController.index)
        .post(postController.store)


}