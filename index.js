var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Sup Fam! 😂👌💯🔥');
});

app.listen(4000, function () {
  console.log('POGGERS')
});