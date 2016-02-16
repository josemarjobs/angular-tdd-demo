var express = require('express');
var util = require('util');

var app = express();

var contacts = [
  {named: "Peter"},
  {named: "Lois"},
  {named: "Stewie"}
];

app.get('/contacts', function (req, res) {
  res.json(contacts);
})

app.listen(9001);
util.log("Server Runnint on http://localhost:9001/contacts")