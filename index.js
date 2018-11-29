var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path')

app.use(express.static(__dirname + '/public'));

//status area object
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {

  //on user connect
  io.emit('chat message', 'VR-BOX UI is connected');
  console.log('VR-BOX UI is connected');

  //on button press
  socket.on('button press', function(id) {
    //whatever functions we need to run for VR-BOX or VR Experience
    console.log(id);

    //status update
    io.emit('status update', id);

  });

  //on button color change
  socket.on('button color update', function(id, color) {
    console.log(id + " color changed to " + color)
  });

});

io.emit('some event', { for: 'everyone' });

http.listen(3000, function() {
  console.log('listening on *:3000');
});