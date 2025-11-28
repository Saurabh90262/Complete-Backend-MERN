const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Calculator</title>
</head>
<body>
    <h1>Welcome to Calculator</h1>
    <a href="/calculate">Go to Calculator</a> 
</body>
</html>`);
    return res.end();
  } else if (req.url === "/calculate") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Calculator</title>
</head>
<body>
    <h1>Here is the Calculator</h1>
    <form action="/calculate-result" method="POST">
    <input type="text" placeholder="firstNumber" name="first"/>
    <input type="text" placeholder="SecondNumber" name="second"/>
    <input type="submit" value="Sum">
    </form>
</body>
</html>`);
    return res.end();
  } else if (req.url === "/calculate-result" && req.method === "POST") {
    return  sumRequestHandler(req,res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Calculator</title>
</head>
<body>
    <h1>404 Page does not Exist</h1>
    <a href="/">Go to Home</a> 
</body>
</html>`);
  return res.end();
};

exports.requestHandler = requestHandler;
