// /api/chat	GET	Return ALL chat
// /api/chat/:id	GET	Return a SINGLE chat
// /api/chat	POST	Add a chat
// /api/chat/:id	PUT	Update a chat
// /api/chat/:id	DELETE	Delete a chat

// test with curl
// curl --data "text=test&complete=false" http://127.0.0.1:3000/api/v1/chat
function createChat(req, res, next) {
    req.body.age = parseInt(req.body.age);
    db.none('insert into accounts(name, time, age, sex)' +
        'values(${name}, ${time}, ${age}, ${sex})',
      req.body)
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Inserted one chat'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  // get http://localhost:3000/api/v1/chats
  function getAllChats(req, res, next) {
    db.any('select * from accounts')
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL chats'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }  

// get http://localhost:3000/api/chats/1
  function getSingleChat(req, res, next) {
    var accountID = parseInt(req.params.id);
    db.one('select * from accounts where id = $1', accountID)
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ONE chat'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }


//  curl -X PUT --data "text=test&complete=true" http://127.0.0.1:3000/api/v1/chat/1
function updateChat(req, res, next) {
    db.none('update accounts set name=$1, time=$2, age=$3, sex=$4 where id=$5',
      [req.body.name, req.body.time, parseInt(req.body.age),
        req.body.sex, parseInt(req.params.id)])
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Updated chat'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }


// curl -X DELETE http://127.0.0.1:3000/api/v1/chat/3
function removeChat(req, res, next) {
    var accountID = parseInt(req.params.id);
    db.result('delete from accounts where id = $1', accountID)
      .then(function (result) {
        /* jshint ignore:start */
        res.status(200)
          .json({
            status: 'success',
            message: `Removed ${result.rowCount} chat`
          });
        /* jshint ignore:end */
      })
      .catch(function (err) {
        return next(err);
      });
  }