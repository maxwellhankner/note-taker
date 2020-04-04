// Require the db.json file
const data = require("../db/db.json");

// Require File System package
const fs = require("fs");

// Require Path package
const path = require('path');

// Export as a function that takes an app as the parameter
module.exports = function(app) {

  // Create a route for user to get the data
  app.get("/api/notes", function(req, res) {
    res.json(data);
  });

  // Create a route for the user to post to data
  app.post("/api/notes", function(req, res) {

    // A new data object is given a property of the next id
    req.body.id = data.length;

    // The new data pbject is pushed to data variable
    data.push(req.body);

    // The data variable is converted to json and overwrites what is currently in the data file
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), function(err) {

      // If the fs method fails, console log the error
      if (err) {
        return console.log(err);
      }
    
      console.log("Success!");
    
    });

    // If successful, a response is sent
    res.json({ message: "You've created a new note!" });

  });

  // Create a route for the user to delete a data object from the data variable
  app.delete("/api/notes/:id", function(req, res) {

    // The data object, at the specified index, is removed from data variable
    data.splice(req.params.id, 1);

    // Overwrite all the objects in data with new id
    for (var i = 0; i < data.length; i++){
      data[i].id = i;
    }

    // The data variable is converted to json and overwrites what is currently in the data file
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), function(err) {

      // If the fs method fails, console log the error
      if (err) {
        return console.log(err);
      }
    
      console.log("Success!");
    
    });

    // If successful, a response is sent
    res.json({ message: "You've deleted note!"});
      
  })
};
