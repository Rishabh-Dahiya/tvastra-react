const fs = require("fs");
const express = require("express");
const app = express();

const hospitals = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/hospitals.json`)
);

app.get("/api/v1/hospitals", (req, res) => {});

const port = 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
