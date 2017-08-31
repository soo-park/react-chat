var mysql      = require('mysql');
var mysqlConfig = require('./config.js');
var connection = mysql.createConnection(mysqlConfig);


var getRooms = function(callback) {
  connection.query('SELECT * FROM users', (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  })
};

var getOneRoom = function(name, callback) {
  connection.query(`SELECT * FROM users where name="${name}"`, (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  })
};

var postMessage = function(fromUser, toUser, Message, callback) {
  individualMessage(toUser, (data1)=> {
    var fromUserMessage = data[0].message - Number(Message);
    var toUserMessage = data1[0].message + Number(Message);
    connection.query(`update users set message=${fromUserMessage} where name="${fromUser}"`, (err, rows, fields) => {
      if (err) throw err;
      connection.query(`update users set message=${toUserMessage} where name="${toUser}"`, (err, rows, fields) => {    
      })
    })      
  })
};


module.exports.getAllUsers = getAllUsers;
module.exports.postMessage = postMessage;