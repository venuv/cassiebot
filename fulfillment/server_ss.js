var fs = require('fs'),
    https = require('https'),
    express = require('express'),
    app = express();

https.createServer({
	key: fs.readFileSync('key.pem'),
	    cert: fs.readFileSync('cert.pem')
	    }, app).listen(55555);

app.get('/', function (req, res) {
	res.header('Content-type', 'text/html');
	return res.end('<h1>Hello, Secure World!</h1>');
    });

//require the body-parser nodejs module
    bodyParser = require('body-parser'),
//require the path nodejs module
    path = require("path");

//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true })); 

//tell express that www is the root of our public web folder
app.use(express.static(path.join(__dirname, 'www')));


//tell express what to do when the /form route is requested
app.post('/',function(req, res){
	res.setHeader('Content-Type', 'application/json');
	//debugging output for the terminal
	console.log('you posted: Id: ' + req.body.id + ', Item: ' + req.body.result.parameters.shopping_item 
		    + ', Query: '+req.body.result.resolvedQuery);
	jsonObj={};
	jsonObj["displayText"]=req.body.result.parameters.shopping_item;
	jsonObj["textToSpeech"]=req.body.result.parameters.shopping_item;
	jsonObj["formattedText"]=req.body.result.parameters.shopping_item;
	//	res.send("processed "+req.body.result.parameters.shopping_item+" request");
	response = "added - "+req.body.result.parameters.shopping_item;
	res.send(JSON.stringify({ "speech": response, "displayText": response}));
	//	res.send(jsonObj);
	    

    });
