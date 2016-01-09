var express = require('./mongoose_connect/node_modules/express');
var url = require('url');
var bodyParser = require('./mongoose_connect/node_modules/body-parser');
var app = express();
var add_User = require('./mongoose_connect/1_mongoose_connect.js');

app.use(bodyParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/',function (req,res){
	res.send("Welcome");
});



app.post('/answer1',function(req,res){
	console.log("Im in app post");
	add_User.answer1(JSON.stringify(req.body));
	res.send('success');
});

app.post('/answer2',function(req,res){
	console.log("Im in app post");
	add_User.answer2(JSON.stringify(req.body));
	res.send('success');
});

app.get('/aaa',function (req,res){
	res.send("hello world!");
});


var port =process.env.PORT || 3000;
app.listen(port); 
app.use('/',express.static('./public')).listen(port);

console.log("listening on port " + port +"\n");

