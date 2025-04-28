// routes/auth.js
const express = require("express");
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

const router = express.Router();


// create a user
router.post("/register", async function (req, res, next) {
    try {
        const { username, password, first_name, last_name, email } = req.body;

        const newUser = await prisma.users.create({
            data: { username, password, first_name, last_name, email },
        });

        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
});

// login user

router.post("/login", async function (req, res, next) {
    try {
        const {username, password} = req.body;

        const user = await prisma.users.findUnique({
            where: {username: username},
        });

        //JWT token here later
        
        if(!user || user.password !== password){
            return res.status(400).json({error: "Invalid username or password"});
        }

        res.json({message: "login successful!"})
    } catch (error) {
        
    }
});



module.exports = router;