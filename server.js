var express = require("express"),
    bodyParser = require("body-parser"),
    handlebars = require("express-handlebars"),
    methodOverride = require("method-override");

var app = express(),
    port = process.env.PORT || 8080;


app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(methodOverride("_method"));

app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/kidsControllers");

app.use("/", routes);
app.listen(port);