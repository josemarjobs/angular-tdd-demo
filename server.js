var express = require('express');
var util = require('util');
var cors = require('cors');

var app = express();
app.use(cors());

var contacts = [
  {name: "Peter", email: 'peter@quahog.com'},
  {name: "Lois", email: 'lois@quahog.com'},
  {name: "stewie", email: 'stewie@quahog.com'}
];

app.get('/contacts', function (req, res) {
  res.json(contacts);
})

app.listen(9001);
util.log("Server Runnint on http://localhost:9001/contacts")