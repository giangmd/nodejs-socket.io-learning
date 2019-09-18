'use strict';

module.exports = function(api) {
    const userController = require('../controllers/users');

    api.route('/users')
        .get(userController.index)
        .post(userController.store)

    
}