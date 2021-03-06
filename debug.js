var express = require('express');

var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static(__dirname+ '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

app.get('/api/robot/fwd', function(req,res){
    console.log('robot has moved forward')
});

app.get('/api/robot/rev', function(req,res){
    console.log('robot has moved backward')
});

app.get('/api/robot/left', function(req,res){
    console.log('robot has turned to the left');
});

app.get('/api/robot/right', function(req,res){
    console.log('robot has turned to the right')
});


app.listen('9999');
