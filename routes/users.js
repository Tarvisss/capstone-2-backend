// routes/users.js
const express = require("express");
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

const router = express.Router();
//gets all users
router.get("/", async function (req, res, next) {
  try {
    const users = await prisma.users.findMany();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// gets a user by there username
router.get("/:username", async function(req, res, next) {
    try {
        const user = await prisma.users.findUnique({
            where: {
                username: req.params.username
            }
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(user);
    } catch (error) {
        next(error); 
    }
});

//patch route to update a user

router.patch("/:username", async function(req, res, next) {
  try {
    const {username} = req.params;
    const dataToUpdate = {};
    const allowedFields = ["username", "first_name", "last_name", "email"];
    for (let field of allowedFields){
      if(req.body[field] !== undefined) {
        dataToUpdate[field] = req.body[field];
      }
    }
    
    if(Object.keys(dataToUpdate).length === 0){
      return res.status(400).json({error: "No valid fields to update"})
    }
    const updatedUser = await prisma.users.update({
      where: {username},
      data: dataToUpdate,
      select: {
        id: true,
        username: true,
        first_name: true,
        last_name: true,
        email: true,
      }
    })

    res.json(updatedUser);

  } catch (error) {
    console.error(error);
    res.status(400).json({error: "Failed to update the user"})
  }
})

//Route to delete a user
router.delete("/:username", async function(req, res, next) {
  try {
    const {username} = req.params;
 
    const deletedUser = await prisma.users.delete({
      where: {username},
      select: {
        id: true,
        username: true,
        first_name: true,
        last_name: true,
        email: true,
      }
    });

    res.json({message: "User deleted", deletedUser});

  } catch (error) {
    console.error(error);
    res.status(404).json({error: "No user found, failed to delete the user"})
  }
})

module.exports = router;
