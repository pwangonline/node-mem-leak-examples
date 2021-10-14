const http = require("http");
const connector = require('./connector');

const delay = () => {
    return new Promise((res) => {
        setTimeout(res, 100)
    });
}

function handleServer(req, res) {
    connector.once('connected', async () => {
      res.end(await delay());
    });
}
 
const server = http.createServer((req, res) => {
    handleServer(req, res);
});

server.listen(3000);
console.log("Server listening to port 3000. Press Ctrl+C to stop it.");