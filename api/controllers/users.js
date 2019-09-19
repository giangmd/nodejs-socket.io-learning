'use strict';

exports.index = (req, res) => {
    const data = [
        {id: 1, name: 'user 1', email: 'user1@gmail.com'},
        {id: 2, name: 'user 2', email: 'user2@gmail.com'},
        {id: 3, name: 'user 3', email: 'user3@gmail.com'},
    ]
    res.json({data: data})
}

exports.store = (req, res) => {
    // console.log(req.body);
    res.json(req.body)
}