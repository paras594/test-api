require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.get("/app", (req, res) => {
  res.json({
    message: "This is test api",
    working: true,
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "working test api",
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port: ${port}`));
