const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController"); // import the controller

// create a user
router.post("/register", authController.registerUser);

// login user
router.post("/login", authController.loginUser);

module.exports = router;

