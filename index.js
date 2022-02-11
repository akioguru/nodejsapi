
const express = require("express");
const app = express();
const fs = require('fs')
  
// Define routes here ...
app.post('/', function(req, res){
    const fs = require('fs')
    console.log(req)
	const content = 'Some content!'

	try {
	    fs.appendFileSync('test.txt', content+"\n")
	    //file written successfully
	} catch (err) {
        console.error(err)
    }
})

  
app.listen(3000, function(){
  console.log("server is running on port 3000");
})