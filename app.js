const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

app.use(cors());
app.use(express.json());
app.us(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Welcome to OneMoreRep");
});

module.exports = app;
