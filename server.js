var express = require('express');
var util = require('util');

var app = express();

var contacts = [
  {named: "Peter", email: 'peter@quahog.com'},
  {named: "Lois", email: 'lois@quahog.com'},
  {named: "Stewie", email: 'stewie@quahog.com'}
];

app.get('/contacts', function (req, res) {
  res.json(contacts);
})

app.listen(9001);
util.log("Server Runnint on http://localhost:9001/contacts")