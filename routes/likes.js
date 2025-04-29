const express = require("express");
const router = express.Router();
const likesController = require("../controllers/likesController")

// Like a challenge
router.post("/:commentId", likesController.addLikeToComment );

//remove like
router.delete("/:commentId", likesController.removeLike);

module.exports = router;