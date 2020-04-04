// Require the express package
var express = require("express");

// Create an instance of the express object
var app = express();

// Set a port to the environment determined port or to 8080, if ran locally
var PORT = process.env.PORT || 8080;

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Require the api and html routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listen for activity on the specified port
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
    
});
