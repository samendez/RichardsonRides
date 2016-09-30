'use strict';
let express = require("express");
let bodyParser = require("body-parser")
let app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/save_money.html")
});
app.post("/", function(req, res){
	console.log(req.body);
});
console.log("Listening");
app.listen(8080);
