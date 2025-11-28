const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    if(req.url==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
        <head><title>Backend Learning</title></head>
        <body><h1>Welcome to Home Page Saurabh Maurya..!</h1></body>
        </html>`);
        return res.end();
    }else if (req.url === '/product'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
        <head><title>Backend Learning</title></head>
        <body><h1>Checkout our Peoducts.</h1></body>
        </html>`);
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
        <head><title>Backend Learning</title></head>
        <body><h1>Subscribe to our Updates</h1></body>
    </html>`);
    res.end();
});
const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`Server is Listening at https://localhost${PORT}`);
});