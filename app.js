'use strict';

const app     = require('express')();
const http    = require('http').Server(app);
const io      = require('socket.io')(http);
const express = require('express');
const admin   = express();
const api     = express();
const router  = express.Router();

const path = __dirname + '/views/';
const admin_path = __dirname + '/views/admin/';
const port = 8080;

router.use(function (req,res,next) {
  // console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

admin.get('/', function(req, res) {
  res.sendFile(admin_path + 'index.html');
});

api.get('/', function(req, res) {
  res.json({status: "It's work!"});
});

app.use(express.static(path));
app.use('/', router);
app.use('/admin', admin);
app.use('/api', api);

// require route api
require('./api/routes/users.js')(api);

const removeItem = function (object, key, value) {
    if (value == undefined)
        return;

    for (var i in object) {
        if (object[i][key] == value) {
            object.splice(i, 1);
        }
    }
};

const users = [];
io.on('connection', function(socket) {
  console.log('a user connected');
  // console.log('socket id server: '+socket.id);

  // event send nickname
  socket.on('send-nickname', function(nickname) {
    socket.nickname = nickname;
    var _t = {
        id: socket.id,
        nickname: socket.nickname
    }
    users.push(_t);

    // send users-list to client site
    io.emit('users-list', users);
  });

  // event send nickname
  socket.on('event-typing', function(data) {
    if (data) {
        io.emit('event-typing', data);
    }
  });

  // event chat
  socket.on('chat-message', function(data) {
    // send emit chat-message to client site
    io.to(data.sender).emit('chat-message', data); //emit to sender
    io.to(data.reciever).emit('chat-message', data); //emit to reciever
  });

  // socket disconect
  socket.on('disconnect', function() {
    console.log('user disconnected');

    removeItem(users, 'id', socket.id);
  });
});

http.listen(port, function () {
  console.log('Example app listening on port '+port+'!')
})