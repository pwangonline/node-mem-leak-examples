const http = require("http");

function computeTerm(term) {
    return computeTerm[term] || (computeTerm[term] = compute());
    function compute() {
        return Buffer.alloc(1e3);
    }
}
const server = http.createServer((req, res) => {
    res.end(computeTerm(Math.random()));
});

server.listen(3000);
console.log("Server listening to port 3000. Press Ctrl+C to stop it.");