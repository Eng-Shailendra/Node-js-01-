// HTTP Module - in nodeJS is a core - that use to create a web server and handle request/responcs without any external libraries 

import http from "node:http"

const PORT = 9000;
let server = http.createServer((req, res) => {
    res.write("<h2>Hello world</h2>");
    res.end(); // it ends the req res cycle and indicates all chunks are recieved
});
server.listen(9000, (err) => {
    if (err) console.log(err);
    console.log("Server started on PORT 9000 ");
});