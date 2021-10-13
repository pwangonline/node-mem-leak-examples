const http = require("http");

const server = http.createServer((req, res) => {
    const requestLogs = [];
    requestLogs.push({ url: req.url, array: new Array(10000).join("*") })
    res.end(JSON.stringify(requestLogs));
});

server.listen(3000);
console.log("Server listening to port 3000. Press Ctrl+C to stop it.");