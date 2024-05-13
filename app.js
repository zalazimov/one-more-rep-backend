const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const omr_controller = require("./controllers/omr_controllers.js");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Controller
app.use("/exercises", omr_controller);

// Health Check route
app.get("/", (req, res) => {
  res.send("Welcome to OneMoreRep");
});

// 404 route
app("*", (req, res) => {
  res.status(400).send("This page not Found");
});

module.exports = app;
