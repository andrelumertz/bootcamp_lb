// criando servidor 

const express = require('express');  // importando o express
const nunjucks = require("nunjucks");

const server = express(); // criando o servidor 
const videos = require("./data")

server.use(express.static('public'));

server.set("view engine", "njk");


nunjucks.configure("views", {
    express: server
})


server.get("/", function(req, res) { 
    return res.render('about') // send é uma função do res
})

server.get("/portfolio", function (req, res) {
  return res.render("portfolio", { items: videos }); // send é uma função do res
});

server.listen(5000, function() {  // servidor esta ouvindo a porta 5000
    console.log("server is running")
})