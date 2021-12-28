const express = require('express');
const nunjucks = require("nunjucks");
const routes = require("./routes");
const server = express();

server.use(express.static('public'));
server.use(routes) // use = middlewares

server.set("view engine", "html");


nunjucks.configure("views", {
    express: server
})


server.get("/", function(req, res) { 
    return res.render('index') // send é uma função do res
})

server.get("/portfolio", function (req, res) {
  return res.render("portfolio"); // send é uma função do res
});

server.listen(5000, function() {  // servidor esta ouvindo a porta 5000
    console.log("server is running")
})