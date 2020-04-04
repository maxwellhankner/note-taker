// require the db.json file
const data = require("../db/db.json");

const fs = require("fs");

const path = require('path');

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
      res.json(data);
    });

    app.post("/api/notes", function(req, res) {

      req.body.id = data.length;

      data.push(req.body);

      fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });

      res.json({ message: "You've created a new note!" });
  
      
    });

    app.delete("/api/notes/:id", function(req, res) {

      data.splice(req.params.id, 1);

      for (var i = 0; i < data.length; i++){
        data[i].id = i;
      }

      fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });

      res.json({ message: "You've deleted note!"});
      
    })
};
