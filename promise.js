const http = require("http");

async function task (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const server = http.createServer((req, res) => {
    task(getRndInteger(500, 20000));
    res.writeHead(200);
    res.end("Hello World");
});

server.listen(3000);
console.log("Server listening to port 3000. Press Ctrl+C to stop it.");