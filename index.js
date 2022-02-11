
const express = require("express");
const app = express();
const fs = require('fs')
  
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// Define routes here ...
app.post('/', function(req, res){
    const fs = require('fs')
    console.log(req.body.plain)
	const content = req.body.plain;

	try {
	    fs.appendFileSync('test.txt', content+"\n")
	    //file written successfully
	} catch (err) {
        console.error(err)
    }
    res.send("res");
})

  
app.listen(3000, function(){
  console.log("server is running on port 3000");
})