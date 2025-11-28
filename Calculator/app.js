const http = require("http");
const {requestHandler} = require('./requestHandler');

const Server = http.createServer(requestHandler);






const PORT = 3000;
Server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
} );
