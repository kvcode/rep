const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

const server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, World!\n");
}); 

server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");

let textOut = "Veni is really loveable with the watermelon in her belly";

fs.writeFileSync("./txt/output.txt", textOut);
