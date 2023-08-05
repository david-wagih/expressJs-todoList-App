const express = require("express");
const cookieParser = require("cookie-parser");
const todos = require("./todos");
const bodyParser = require("body-parser");

// this is the express function that creates an express application
const app = express();
const PORT = 8080;

// this is the port that the server will be listening to (the server is running on this port without stopping)
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

// this is an example for an Application level middleware that will be executed for every request to the server
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  // next is a function that is used to pass control to the next middleware function
  next();
});

// this is an Error handling middleware that will be executed when an error occurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// load the cookie-parsing middleware
// this is an example of Third party middleware
// the cookie-parser middleware parses cookies attached to the client request object
app.use(cookieParser());

// load the body-parsing middleware
app.use(bodyParser.json());

// this is a simple route example
// routing methods of express represents HTTP methods (get, post, put, delete, etc.)
// route path is the path at which the request will be made
// route handler (callback function) is the function that will be executed when the request is made
app.get("/", (req, res) => {
  // res.json is used to send a JSON response
  // res.send is used to send a response of various types
  res.json("Hello World");
});

// this is a router that is used to handle requests to the /todos path
app.use("/todos", todos);
