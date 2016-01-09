var express = require('./mongoose_connect/node_modules/express');
var url = require('url');
var bodyParser = require('./mongoose_connect/node_modules/body-parser');
var add_User = require('./mongoose_connect/1_mongoose_connect.js');
var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser());

app.get('/',function (req,res){
	res.send("Welcome");
});


app.post('/answer1',function(req,res){
	console.log("Im in answer1 post");
	var t = JSON.stringify(req.body);
	add_User.answer1(t,function(t){
 	// 	var x = t;
	// res.json(x);
	res.send("hello0000");

	});
});


app.get('/aaa',function (req,res){
	res.send("hello world!");
});



var port = process.env.PORT || 3000;
app.listen(port); 
console.log("listening on port " + port +"\n");



// app.post('/answer2',function(req,res){
// 	console.log("Im in answer2 post");
// 	var t = JSON.stringify(req.body);
// 	add_User.answer2(t,function(t){
//  	// 	var x = t;
// 	// res.json(x);
// 	res.send("hiiii");
// 	});
// });



// app.get('/girls',function (req,res){ 
// 	app.set('json space',3);
// 	add_User.updateGirls(function(girlList){
// 		girls = girlList;
// 		res.json(girls);
// 	});
// });

// app.post('/answer1',function(req,res){
// 	console.log("Im in app post");
// 	add_User.answer1(JSON.stringify(req.body));
// 	res.send('success');
// });

// app.post('/answer2',function(req,res){
// 	console.log("Im in app post");
// 	add_User.answer2(JSON.stringify(req.body));
// 	res.send('success');
// });
