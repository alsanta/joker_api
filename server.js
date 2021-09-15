const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// Make sure to import the config and the route 
// The config file is basically the location of the Db
require("./server/config/jokes.config");
// The route file is to help modularize
require("./server/routes/joke.route")(app);

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );