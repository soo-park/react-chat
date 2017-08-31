var mysql      = require('mysql');
var mysqlConfig = require('./config.js');
var connection = mysql.createConnection(mysqlConfig);

var getRooms = function(callback) {
  connection.query('SELECT * FROM rooms', (err, rows, fields) => {
    if (err) throw err;
      callback(rows);
  })
};

var getOneRoom = function(id, callback) {
  connection.query(`SELECT * FROM rooms where id="${id}"`, (err, rows, fields) => {
    if (err) throw err;
      callback(rows);
  })
};

var postMessage = function(userId, message, callback) {
  connection.query(`update message set message=${message} where id="${userId}"`, (err, rows, fields) => {
    if (err) throw err;
      callback(rows);
  })
};

var getMessagesForRoom = function(roomId) {
  connection.query(`SELECT * FROM messages where roomId=${roomId}`, (err, rows, fields) => {
    if (err) throw err;
      callback(rows);
  })
};

module.exports.getRooms = getRooms;
module.exports.getOneRoom = getOneRoom;
module.exports.postMessage = postMessage;
module.exports.getMessages = getMessages;