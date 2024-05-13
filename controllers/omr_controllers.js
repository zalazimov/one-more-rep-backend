const express = require("express");
// const router = express.Router()
const { Router } = require("express");

const exercisesController = Router();

exercisesController.get("/", (req, res) => {
  res.status(200).json({ data: exercises });
});

// Error Validation

module.exports = exercisesController;
