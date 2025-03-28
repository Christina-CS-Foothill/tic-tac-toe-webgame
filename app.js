const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

app.use(express.static("public")); //these files are visible to visiters of your site, "public", and will not change/aren't dynamic

app.get("/", function (req, res) {
  const htmlFilePath = path.join(__dirname, "index.html");
  res.sendFile(htmlFilePath);
});

app.get("/test", function (req, res) {
  res.send("<h2>Test</h2>");
});

app.listen(3000);
