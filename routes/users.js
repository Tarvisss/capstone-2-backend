const express = require("express")
const router = express.Router();
const usersController = require("../controllers/usersController")

//get users route
router.get("/", usersController.getUsers);

// get single user
router.get("/:username", usersController.getUser);

// update a user
router.patch("/:username", usersController.updateUser);

// delete a user
router.delete("/:username", usersController.deleteUser);


module.exports = router;
