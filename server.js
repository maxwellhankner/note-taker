const express = require('express');

let app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"))
});

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})