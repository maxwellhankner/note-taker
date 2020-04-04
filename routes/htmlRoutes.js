// Require Path package
var path = require("path");

// Export as a function that takes an app as the parameter
module.exports = function(app) {

  // Create a route to the notes.html page
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // Create a route for all other requests to the index.html page
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
};
  