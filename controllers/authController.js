const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

// REGISTER new user
exports.registerUser = async (req, res, next) => {
    try {
        const { username, password, first_name, last_name, email } = req.body;

        const newUser = await prisma.users.create({
            data: { username, password, first_name, last_name, email },
        });

        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

// LOGIN user
exports.loginUser = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const user = await prisma.users.findUnique({
            where: { username },
        });

        // JWT token logic can go here later

        if (!user || user.password !== password) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        res.json({ message: "Login successful!" });
    } catch (error) {
        next(error); 
    }
};
