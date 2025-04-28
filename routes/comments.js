// // routes/users.js
const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/commentController")

// Create new comment for a challenge
router.post("/:challengeId/comments", commentsController.createComment);

//gets all comments for a challenge
router.get("/:challengeId/comments", commentsController.getComments);

// get a single comment by id
router.get("/:challengeId/comments/:id", commentsController.getComment);

//edit a single comment
router.patch("/:challengeId/comments/:id", commentsController.updateComment);

//delete a comment
router.delete("/:challengeId/comments/:id", commentsController.removeComment);


module.exports = router;
