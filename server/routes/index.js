const express = require("express");
const userController = require("../controllers/index");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.json("hello Node JS");
});

app.post("/register", async (req, res) => {
  res.json(await userController.createUser(req));
});

app.post("/login", async (req, res) => {
  res.json(await userController.loginUser(req));
});

module.exports = app;
