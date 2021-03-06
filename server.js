// REQUIRE
var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;

// EXPRESS
var app = express();
var PORT = process.env.PORT || 3000;

// SET UP EXPRESS 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./controllers/burgersController.js");
app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);
app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});