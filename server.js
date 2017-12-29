const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Set up PORT to be either the production value or 8080
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Bring in the models
const db = require("./models");

// Bring in the routes
const routes = require('./routes/api-routes.js');
routes(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ /* force: true */ }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


// app.listen(PORT, function() {
//   db.sequelize.sync();
// });
