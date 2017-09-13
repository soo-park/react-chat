const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/chat';


// CREATE	/api/v1/chats	Create a single chat
// READ	/api/v1/chats	Get all chats
// UPDATE	/api/v1/chats/:chat_id	Update a single chat
// DELETE	/api/v1/chats/:chat_id	Delete a single chat


// test with curl
// curl --data "text=test&complete=false" http://127.0.0.1:3000/api/v1/chat
router.post('/api/v1/chats', (req, res, next) => {
    const results = [];
    // Grab data from http request
    const data = {text: req.body.text, complete: false};
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
      // Handle connection errors
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      // SQL Query > Insert Data
      client.query('INSERT INTO items(text, complete) values($1, $2)',
      [data.text, data.complete]);
      // SQL Query > Select Data
      const query = client.query('SELECT * FROM items ORDER BY id ASC');
      // Stream results back one row at a time
      query.on('row', (row) => {
        results.push(row);
      });
      // After all data is returned, close connection and return results
      query.on('end', () => {
        done();
        return res.json(results);
      });
    });
  });


  // get http://localhost:3000/api/v1/chats
  router.get('/api/v1/chats', (req, res, next) => {
    const results = [];
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
      // Handle connection errors
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      // SQL Query > Select Data
      const query = client.query('SELECT * FROM items ORDER BY id ASC;');
      // Stream results back one row at a time
      query.on('row', (row) => {
        results.push(row);
      });
      // After all data is returned, close connection and return results
      query.on('end', () => {
        done();
        return res.json(results);
      });
    });
  });


//  curl -X PUT --data "text=test&complete=true" http://127.0.0.1:3000/api/v1/chat/1
  router.put('/api/v1/chats/:chat_id', (req, res, next) => {
    const results = [];
    // Grab data from the URL parameters
    const id = req.params.chat_id;
    // Grab data from http request
    const data = {text: req.body.text, complete: req.body.complete};
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
      // Handle connection errors
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      // SQL Query > Update Data
      client.query('UPDATE items SET text=($1), complete=($2) WHERE id=($3)',
      [data.text, data.complete, id]);
      // SQL Query > Select Data
      const query = client.query("SELECT * FROM items ORDER BY id ASC");
      // Stream results back one row at a time
      query.on('row', (row) => {
        results.push(row);
      });
      // After all data is returned, close connection and return results
      query.on('end', function() {
        done();
        return res.json(results);
      });
    });
  });


// curl -X DELETE http://127.0.0.1:3000/api/v1/chat/3

  router.delete('/api/v1/chats/:chat_id', (req, res, next) => {
    const results = [];
    // Grab data from the URL parameters
    const id = req.params.chat_id;
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
      // Handle connection errors
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      // SQL Query > Delete Data
      client.query('DELETE FROM items WHERE id=($1)', [id]);
      // SQL Query > Select Data
      var query = client.query('SELECT * FROM items ORDER BY id ASC');
      // Stream results back one row at a time
      query.on('row', (row) => {
        results.push(row);
      });
      // After all data is returned, close connection and return results
      query.on('end', () => {
        done();
        return res.json(results);
      });
    });
  });