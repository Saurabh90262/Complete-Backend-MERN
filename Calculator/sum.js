const sumRequestHandler = (req,res)=>{
    console.log("In sumrequestHandler",req.url);
    const body = [];
    req.on('data',chunks=>body.push(chunks));
    req.on('end',()=>{
        const bodystr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodystr); // This turns the URL-encoded string into a key-value parser.
        const bodyObj = Object.fromEntries(params); // Converts params into a plain JavaScript object.
        const result = Number(bodyObj.first)+Number(bodyObj.second);
        console.log(result);
          res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Calculator</title>
</head>
<body>
    <h1>The Sun is ${result}</h1> 
</body>
</html>`);
  return res.end();
    })
}

exports.sumRequestHandler = sumRequestHandler;