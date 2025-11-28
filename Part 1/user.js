const { create } = require("domain");
const fs = require("fs");

const userRequestHandler = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.write(`<html><head><title>Backend Class</title></head>
        <body><h1>Enter your Details:</h1><br></br>
        <form action ="/submit-details" method="POST">
           <input type = "text" name = "username" placeholder="Enter your name"></input>
           <label for="male">Male</label>
           <input type="radio" id="male" name="gender" value="male"></input>
           <label for="female">Female</label>
           <input type="radio" id="female" name="gender" value="female"></input>
           <br>
           <input type="submit" value="Submit"></input>
        </form>
        </body></html>`);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on('data',chunk =>{
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end',()=>{
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      // const bodyobject = {};
    //   for(const[key,val] of params.entries()){
    //     bodyobject[key] = val;
    //   }
    //   console.log(bodyobject);
    const bodyobject = Object.fromEntries(params);
    console.log(bodyobject);
        fs.writeFileSync("user.txt", JSON.stringify(bodyobject));
    })
    

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }}
  
  module.exports = userRequestHandler;

