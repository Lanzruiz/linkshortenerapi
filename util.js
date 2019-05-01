const fs = require('fs-extra')
const BitlyAPI = require("node-bitlyapi");
const config = require('./config')
const bodyParser = require("body-parser");

const Bitly = new BitlyAPI({
	client_id: "o_47iaapuu76",
    client_secret: "R_fd87ea76fb7c44e7a01346314b180380"	
    //access token 4183000e2470990a335c37c37dd6a69b4e2bef61
});

Bitly.setAccessToken('4183000e2470990a335c37c37dd6a69b4e2bef61');

class Util {

    constructor(url) {
       
    }

    write(logs) {

        return new Promise(function(resolve, reject, next) {
        // /private/tmp/shortlinks.txt
            switch(config.os) {
                case 'mac':
                // fs.outputFile('/private/tmp/shortlinks.txt', logs, err => {
                //     console.log(err) // => null
                //     resolve('written');
                
                // })
                    fs.appendFile('/private/tmp/shortlinks.txt', logs, function (err) {
                        if (err) throw err;
                        console.log('Saved!');
                    });
                break;
                case 'linux':
                    // fs.outputFile('/var/tmp', logs, err => {
                    //     console.log(err) // => null
                    //     resolve('written');
                        
                    
                    // })
                    fs.appendFile('/var/tmp/shortlinks.txt', logs, function (err) {
                        if (err) throw err;
                        console.log('Saved!');
                    });
                    
                break;
                default:
                // code block
            }

            
        })
       
    }
    shorturl(url) {
        return new Promise(function(resolve, reject, next) {
            Bitly.shorten({longUrl:url}, function(err, results) {
                var obj = JSON.parse(results);   
                //res.send(obj.data);
                resolve(results);

             });
            
        })
        
    }
}

module.exports = new Util();
