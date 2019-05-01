// Require express module
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var util = require('./util');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var dt = new Date();
var utcDate = dt.toUTCString();

const PORT = 7000;
//Start server on Port 7000
app.listen(PORT, () => {
   console.log(`Server started on port`, PORT);
   
});


app.post('/url', function(req, res, next){
    var result = util.shorturl(req.body.url);
    result.then(function(result){
        var obj = JSON.parse(result);
        res.send(obj.data);
        util.write(utcDate +' - '+obj.data.url+' - '+obj.data.long_url);
    });


    
});