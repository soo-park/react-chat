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
  
  socket.on('send', (message) => {
    console.log('received message:', message);
    // store in db here
    // server should add the timestamp & id
    socket.emit('return-message', message);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });  

});

