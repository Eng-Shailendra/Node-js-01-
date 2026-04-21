// HTTP Module -  in nodeJS is a built -in  module that allow you to create a web server and handle request/responcs without any external libraries 

import http from "node:http"

const PORT = 9000;
let server = http.createServer((req, res) => {
    res.write("<h2>Hello world</h2>");  
    res.end();
})
server.listen(9000, () => {
    console.log("Server started on PORT 9000 ");
});