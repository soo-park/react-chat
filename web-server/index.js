var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
var HOST = '0.0.0.0'

var server = app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

var io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/../client/dist'));

// app.get('/messages', function (req, res) {
//   console.log("in /messages of the server");  
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

io.on('connection', function(socket) {
  
  console.log('a user has connected to socket id: ', socket.id);
  
  socket.on('chat message', (message) => {
    console.log('received message:', message);
    // FIXME: store chat data in db here
    // broadcase excludes me: socket.broadcast.emit('chat message', message);
    socket.emit('chat message', message);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });  

});