var express = require('express');

//create new app
var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('express server is up to port 3000');
});