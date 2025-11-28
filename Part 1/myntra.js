const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);
  if (req.url === "/") {
    res.write(
      `<html>
        <head>
          <title>Myntra Home Page</title>
        </head>
        <body>
          <h1>Welcome to Myntra</h1>
          <p>Browse different Sections</p>
          <ul>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
          <li><a href="/kids">Kids</a></li>
          <li><a href="/cart">Cart</a></li>
          </ul>
        </body>
      </html>`
    );
    return res.end();
  } else if (req.url === "/men") {
    res.write(
      `<html>
        <head>
          <title>Mens</title>
        </head>
        <body>Checkout the Mens Essentials</body>
      </html>`
    );
    return res.end();
  } else if (req.url === "/women") {
    res.write(`
      <html>
        <head>
          <title>Women</title>
        </head>
        <body>Checkout the Women Essentials</body>
      </html>`
    );
    return res.end();
  } else if (req.url === "/kids") {
    res.write(`
      <html>
        <head>
          <title>Kids</title>
        </head>
        <body>Browse Products for Your kids</body>
      </html>`
    );
    return res.end();
  } else if (req.url === "/cart") {
    res.write(`
      <html>
        <head>
          <title>Cart</title>
        </head>
        <body>Here is Your Cart, checkout for Order</body>
      </html>`
    );
    return res.end();
  }
});

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
