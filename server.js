
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const projects = require("./projects.json");
const about = require("./about.json");


const app = express();


app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello World");
});


app.get("/projects", (req, res) => {
  res.json(projects);
});


app.get("/about", (req, res) => {
  res.json(about);
});




app.listen(PORT, () => console.log(`Listening on port ${PORT}`));