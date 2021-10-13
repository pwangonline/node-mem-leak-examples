const http = require("http");

var theThing = null;
var replaceThing = function () {
    var originalThing = theThing;
    var unused = function () {
        if (originalThing) console.log("hi");
    };
    theThing = {
        longStr: new Array(10000).join("*"),
        someMethod: function () {
            console.log(someMessage);
        },
    };
    originalThing = null;
};

const server = http.createServer((req, res) => {
    replaceThing();
    res.writeHead(200);
    res.end("Hello World");
});

server.listen(3000);
console.log("Server listening to port 3000. Press Ctrl+C to stop it.");