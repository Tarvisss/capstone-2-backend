// routes/users.js
const express = require("express");
const router = express.Router();
const challengeController = require("../controllers/challengesController");
//gets a list of all challenges
router.get("/",challengeController.getChallenges);

// route to create a challenge;
router.post("/", challengeController.createChallenge)

// get a challenge by the title
router.get("/:id", challengeController.getChallenge);

//patch route to update a challenge
router.patch("/:id",challengeController.updateChallenge);

// //Route to delete a user
router.delete("/:id", challengeController.removeChallenge);

router.post("/:challengeId/join", challengeController.joinChallenge);
  
// Route to leave a challenge
router.delete("/:challengeId/leave", challengeController.leaveChallenge);

module.exports = router;
